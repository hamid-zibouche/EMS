import { Injectable } from '@angular/core';
import {BehaviorSubject} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class BoiteActiveService {

  private boiteActiveSubject = new BehaviorSubject<boolean>(false);
  boiteActive$ = this.boiteActiveSubject.asObservable();

  toggleBoiteActive() {
    this.boiteActiveSubject.next(!this.boiteActiveSubject.value);
  }

  setBoiteActive(state: boolean) {
    this.boiteActiveSubject.next(state);
  }
}
