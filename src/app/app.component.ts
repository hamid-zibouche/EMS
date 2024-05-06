import {Component, EventEmitter, Output} from "@angular/core";
import {FormsModule} from "@angular/forms";
import {HotelComponent} from "./hotel/hotel.component";
import {CommonModule} from "@angular/common";
import {RouterLink, RouterLinkActive, RouterOutlet} from "@angular/router";
import {NavBarComponent} from "./nav-bar/nav-bar.component";
import {NavBarService} from "./nav-bar/nav-bar.service";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css","style.css"],
  standalone: true,
  imports: [
    FormsModule,
    HotelComponent,
    CommonModule,
    RouterOutlet,
    RouterLink,
    RouterLinkActive,
    NavBarComponent
  ]
})

export class AppComponent{
  title:string="Easier";
  isMenuActive: boolean = false;


  constructor(private sharedService: NavBarService) { }

  handleClick() {
    this.sharedService.menuClicked();
    this.isMenuActive = !this.isMenuActive;
  }

}
