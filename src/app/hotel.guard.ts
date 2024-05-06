import {
  ActivatedRouteSnapshot,
  CanActivate,
  GuardResult,
  MaybeAsync, Router,
  RouterStateSnapshot,
  UrlTree
} from '@angular/router';
import {Observable} from "rxjs";
import {Injectable, Injector} from "@angular/core";
import {HotelListService} from "./services/hotel-list.service";
import {IHotel} from "./hotel/IHotel";

@Injectable({
  providedIn: 'root'
})

export class HotelGuard implements CanActivate{


  constructor( private router:Router, public hotelService: HotelListService) {}

  canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    console.log('next:',next)

    const id = + next.url[1].path;



    if(isNaN(id) || id <= 0){
      alert('Hotel est inconnu');

      this.router.navigate(['/hotels'])
      return false;
    }

    return true;
  }

};
