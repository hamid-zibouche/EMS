import {Component, OnInit} from '@angular/core';
import {KeycloakService} from "../services/keycloak/keycloak.service";
import {Router} from "@angular/router";
import {KeycloakResourceAccess} from "keycloak-js";
import {KeyValuePipe, NgClass, NgForOf, NgIf} from "@angular/common";
import {toggle} from "ionicons/icons";
import {BoiteActiveService} from "../shared/boitActive/boite-active.service";

@Component({
  selector: 'app-boite-dialog',
  standalone: true,
  imports: [
    NgForOf,
    NgIf,
    KeyValuePipe,
    NgClass
  ],
  templateUrl: './boite-dialog.component.html',
  styleUrl: './boite-dialog.component.css'
})
export class BoiteDialogComponent implements OnInit{
  ngOnInit(): void {
    //on recuperer les roles qu'apres l'initialisation de keycloak
    this.keycloakService.keycloakInitialized.subscribe(initialized => {
      if (initialized) {
        this.getRoles();
      }
    });

    console.log("boite-dialogue",this.roles);

    this.boiteActive.boiteActive$.subscribe(state => {
      this.boiteIsActive = state;
    });
  }

  constructor(private keycloakService: KeycloakService,private router: Router,private boiteActive:BoiteActiveService){}

  private profile = this.keycloakService.profile
  public roles:KeycloakResourceAccess | undefined ;
  public boiteIsActive: boolean = false;

  private getRoles(): void {
    this.roles = this.keycloakService.roles();
    console.log("boite-dialogue", this.roles);
  }

  public toggleBoiteActive(){

    this.boiteActive.toggleBoiteActive();
    console.log("toggle : ", this.boiteActive);
  }


  rien() {
    this.boiteIsActive = true;
  }
}
