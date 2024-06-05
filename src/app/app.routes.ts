import { Routes } from '@angular/router';


import {NF404Component} from "./nf404/nf404.component";
import {HomeComponent} from "./home/home.component";
import {authGuard} from "./guards/auth/auth.guard";
import {ErrorKeycloakComponent} from "./error-keycloak/error-keycloak.component";

export const routes: Routes = [
  {
    path:'ems',
    component:HomeComponent,
    /* canActivate: [authGuard] */
  },
  {
    path:'errorkeycloakinit',
    component:ErrorKeycloakComponent,
    /* canActivate: [authGuard] */
  },
  {
    path:'',
    redirectTo:'/ems',
    pathMatch: 'full'
  },
  {
    path:'**',
    component:NF404Component
  }

];
