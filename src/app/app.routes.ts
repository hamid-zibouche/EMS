import { Routes } from '@angular/router';

import {HomeComponent} from "./home/home.component";
import {HotelComponent} from "./hotel/hotel.component";
import {LoginComponent} from "./login/app.loginComponent";
import {HotelDetailComponent} from "./hotel/hotel-detail/hotel-detail.component";
import {HotelGuard} from "./hotel.guard";
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
    path:'hotels',
    component:HotelComponent
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
    path:'hotels/:id',
    component:HotelDetailComponent,
    canActivate:[HotelGuard]
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
