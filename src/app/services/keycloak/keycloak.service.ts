import {Injectable, OnInit} from '@angular/core';
import Keycloak, {KeycloakResourceAccess} from 'keycloak-js';
import { UserProfile } from './user-profile';
import {Router} from "@angular/router";
import {LoaderService} from "../../loader/loader.service";
import {ConfigService} from "../config/config.service";
import {BehaviorSubject} from "rxjs";


@Injectable({
  providedIn: 'root',
})
export class KeycloakService {
  constructor(
    private router: Router,
    private loaderService: LoaderService,
    private configService: ConfigService
  ) {

  }

  private _keycloak: Keycloak | undefined;
  private _profile: BehaviorSubject<UserProfile | undefined> = new BehaviorSubject<UserProfile | undefined>(undefined);
  private _details: KeycloakResourceAccess | undefined;
  private config: any;
  private _keycloakInitialized: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);

  get keycloakInitialized() {
    return this._keycloakInitialized.asObservable();
  }

  get profile() {
    return this._profile.asObservable();
  }

  get keycloak() {
    return this._keycloak;
  }

  private async loadProfile() {
    try {
      const userProfile = await this._keycloak?.loadUserProfile();
      if (userProfile) {
        this._profile.next(userProfile as UserProfile);
      }
    } catch (error) {
      console.error('Failed to load user profile:', error);
    }
  }

  init() {
    this.configService.getConfig().subscribe((data: any) => {
      this.config = data.keycloak;
      console.log("config:", this.config.clientId);

      this._keycloak = new Keycloak({
        url: this.config.url,
        realm: this.config.realm,
        clientId: this.config.clientId,
      });

      console.log('Keycloak initialization started', this.config);
      this.loaderService.show();

      this._keycloak.init({
        onLoad: 'login-required',
      }).then(async authenticated => {
        if (authenticated) {
          console.log('User authenticated successfully');
          await this.loadProfile();
          this._details = this._keycloak?.resourceAccess;
          console.log('details:', this._details);
        } else {
          console.warn('User is not authenticated');
          // Gérer le cas où l'utilisateur n'est pas authentifié
        }
        this._keycloakInitialized.next(true);
      }).catch(initError => {
        this._keycloakInitialized.next(true);
        console.error('Keycloak initialization failed:', initError);
        this.router.navigate(['/errorkeycloakinit']);
      }).finally(() => {
        console.log("Finalizing Keycloak initialization");
        this.loaderService.hide();
        this._keycloakInitialized.next(true);
      });
    });
  }

  login() {
    return this._keycloak?.login();
  }

  logout() {
    this.configService.getConfig().subscribe((data: any) => {
      console.log("Redirecting to Commander");
      return this._keycloak?.logout({ redirectUri: data.logout.url });
    });
  }

  management() {
    return this._keycloak?.accountManagement();
  }

  roles() {
    return this._keycloak?.resourceAccess;
  }
}
