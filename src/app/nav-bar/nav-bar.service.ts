import {Injectable} from "@angular/core";
import {Subject} from "rxjs";

@Injectable({
  providedIn: 'root'
})

export class NavBarService {
  private active = new Subject<boolean>();

  active$ = this.active.asObservable();

  menuClicked() {
    this.active.next(true);
  }

}
