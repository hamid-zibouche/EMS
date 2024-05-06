import { Routes } from '@angular/router';

import {HomeComponent} from "./home/home.component";
import {HotelComponent} from "./hotel/hotel.component";
import {LoginComponent} from "./login/app.loginComponent";
import {HotelDetailComponent} from "./hotel/hotel-detail/hotel-detail.component";
import {HotelGuard} from "./hotel.guard";

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
    path:'hotels/:id',
    component:HotelDetailComponent,
    canActivate:[HotelGuard]
  },
  {
    path:' ',
    redirectTo:'/home',
    pathMatch: 'full'
  },
  {
    path:'**',
    redirectTo:'/home',
    pathMatch: 'full'
  }

];
