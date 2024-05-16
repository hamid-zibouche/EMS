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

@Injectable({
  providedIn: 'root'
})

export class HotelGuard implements CanActivate{


  constructor( private router:Router) {}

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
