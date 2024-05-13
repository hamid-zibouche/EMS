import { Routes } from '@angular/router';

import {HomeComponent} from "./home/home.component";
import {LoginComponent} from "./login/app.loginComponent";
import {RegisterComponent} from "./register/register.component";
import {SignOutComponent} from "./sign-out/sign-out.component";
import {NF404Component} from "./nf404/nf404.component";

export const routes: Routes = [
  {
    path:'login',
    component:LoginComponent
  },
  {
    path:'home',
    component:HomeComponent
  },
  {
    path:'register',
    component:RegisterComponent
  },
  {
    path:'signout',
    component:SignOutComponent
  },
  {
    path:'',
    redirectTo:'/login',
    pathMatch: 'full'
  },
  {
    path:'**',
    component:NF404Component
  }

];
