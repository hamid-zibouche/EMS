import {Component, EventEmitter, OnInit, Output} from "@angular/core";
import {FormsModule} from "@angular/forms";
import {CommonModule} from "@angular/common";
import {RouterLink, RouterLinkActive, RouterOutlet} from "@angular/router";
import {NavBarComponent} from "./nav-bar/nav-bar.component";
import {NavBarService} from "./nav-bar/nav-bar.service";
import {KeycloakService} from "./services/keycloak/keycloak.service";
import {BoiteDialogComponent} from "./boite-dialog/boite-dialog.component";
import {LoaderComponent} from "./loader/loader.component";
import {LoaderService} from "./loader/loader.service";
import {Observable} from "rxjs";
import {ConfigService} from "./services/config/config.service";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css","style.css"],
  standalone: true,
  imports: [
    FormsModule,
    CommonModule,
    RouterOutlet,
    RouterLink,
    RouterLinkActive,
    NavBarComponent,
    BoiteDialogComponent,
    LoaderComponent
  ]
})

export class AppComponent implements OnInit {
  title:string="Easier";
  isMenuActive: boolean = false;
  loading$: Observable<boolean>;
  keycloakInitilised: boolean | undefined;

  constructor(private sharedService: NavBarService, private keycloakService: KeycloakService, private loaderService: LoaderService,private configService: ConfigService) {
    this.loading$ = this.loaderService.loading$;
  }

  handleClick() {
    this.sharedService.menuClicked();
    this.isMenuActive = !this.isMenuActive;
  }

  ngOnInit(): void {
    this.keycloakService.keycloakInitialized.subscribe(initialized => {
      if (initialized) {
        this.keycloakInitilised = true;
      }else{

      }
    });
  }



}
