import { Injectable } from '@angular/core';
import Keycloak from 'keycloak-js';
import { UserProfile } from './user-profile';
import {Router} from "@angular/router";
import {LoaderService} from "../../loader/loader.service";

@Injectable({
  providedIn: 'root',
})
export class KeycloakService {
  private _keycloak: Keycloak | undefined;
  private _profile: UserProfile | undefined;

  get keycloak() {
    if (!this._keycloak) {
      this._keycloak = new Keycloak({
        url: 'http://172.24.7.200:8890',
        realm: 'ems',
        clientId: 'Ems-Home',
      });
    }
    return this._keycloak;
  }

  get profile(): UserProfile | undefined {
    return this._profile;
  }

  constructor(private router : Router, private loaderService: LoaderService) {}

  async init() {
    console.log('Keycloak initialization started');
    this.loaderService.show();
    try {
      const authenticated = await this.keycloak?.init({
        onLoad: 'login-required',
      });

      if (authenticated) {
        console.log('User authenticated successfully');
        try {
          this._profile = (await this.keycloak?.loadUserProfile()) as UserProfile;
          if (this._profile) {
            this._profile.token = this.keycloak?.token;
            console.log('User profile loaded successfully:', this._profile);


            const realmRoles = this.keycloak?.realmAccess?.roles || [];
            //affichage des roles de l'utilisateur courant sur le client ems home
            const resourceRoles = this.keycloak?.resourceAccess || [];
            console.log('Realm Roles:', realmRoles);
            console.log('Resource Roles for "Ems-Home":', resourceRoles);

          }
        } catch (profileError) {
          console.error('Failed to load user profile:', profileError);
        }
      } else {
        console.warn('User is not authenticated');
      }
    } catch (initError) {
      console.error('Keycloak initialization failed:', initError);
      await this.router.navigate(['/errorkeycloakinit']); // Redirection en cas d'erreur
    } finally {
      console.log("final keycloak")
      this.loaderService.hide();
    }
  }

  login() {
    return this.keycloak?.login();
  }

  logout() {
    return this.keycloak?.logout({ redirectUri: 'http://172.24.7.200:5500/ems' });
  }

  management(){
    return this._keycloak?.accountManagement();
  }
  roles(){
    return this._keycloak?.resourceAccess;
  }
}
