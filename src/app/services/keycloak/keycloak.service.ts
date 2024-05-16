import { Injectable } from '@angular/core';
import Keycloak from "keycloak-js";

@Injectable({
  providedIn: 'root'
})
export class KeycloakService {

  private _keycloack: Keycloak | undefined;

  get keycloak (){
    if (!this._keycloack){
      this._keycloack= new Keycloak({
        url:'http://localhost:8080',
        realm:'EMS-realm',
        clientId:'commander_ui'
      });
    }
    return this._keycloack
  }

  constructor() { }

  async init(){
    console.log("keycloak initalization");

    const authenticated = await this.keycloak?.init({
      onLoad:'login-required'
    });

    if (authenticated){
      console.log('user authenticated.......')
    }
  }
}
