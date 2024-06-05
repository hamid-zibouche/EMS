import { Injectable } from '@angular/core';
import {BehaviorSubject} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class MenuActiveService {

  private menuActiveSubject = new BehaviorSubject<boolean>(false);
  menuActive$ = this.menuActiveSubject.asObservable();

  toggleMenuActive() {
    this.menuActiveSubject.next(!this.menuActiveSubject.value);
  }

  fermerMenuActive() {
    this.menuActiveSubject.next(false);
  }

  setMenuActive(state: boolean) {
    this.menuActiveSubject.next(state);
  }
}
