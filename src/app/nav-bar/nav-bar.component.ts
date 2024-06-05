import {Component, HostListener, OnInit} from '@angular/core';
import {Router, RouterLink, RouterLinkActive} from "@angular/router";

import {NgClass, NgIf} from "@angular/common";
import {KeycloakService} from "../services/keycloak/keycloak.service";
import {BoiteActiveService} from "../shared/boitActive/boite-active.service";
import {MenuActiveService} from "../shared/menuActive/menu-active.service";




@Component({
  selector: 'app-nav-bar',
  standalone: true,
  imports: [
    RouterLinkActive,
    RouterLink,
    NgClass,
    NgIf
  ],
  templateUrl: './nav-bar.component.html',
  styleUrl: './nav-bar.component.css'
})
export class NavBarComponent implements OnInit {

  public username:string|undefined

  constructor(private keycloakService: KeycloakService,private router: Router, private boiteActive:BoiteActiveService,private menuActive : MenuActiveService) {
  }

  public menuIsActive: boolean = false;
  toggleDropdown() {
    this.menuActive.toggleMenuActive();
    console.log(this.menuIsActive);
  }

  ngOnInit(): void {
    /* this.toggleDropdown(); */
    if(this.profile){
    this.username = this.profile.username;
    }
    this.checkScreenSize();
    this.boiteActive.boiteActive$.subscribe(state => {
      this.boiteIsActive = state;
    });
    this.menuActive.menuActive$.subscribe(state => {
      this.menuIsActive = state;
    });
  }

  logout(){
    this.keycloakService.logout();

    /* const allCookies: {} = this.cookieService.getAll(); // Obtenez tous les cookies
    for (const cookieName in allCookies) {
      // Parcourez tous les cookies et supprimez-les
      if (allCookies.hasOwnProperty(cookieName)) {
        this.cookieService.delete(cookieName);
      }
    } */
  }
  public home(): void {
    window.location.href = 'http://172.24.7.200:5500/ems';
  }

  public management(): void {
     this.keycloakService.management();
  }

  public isSmallScreen:boolean = false;

  @HostListener('window:resize', ['$event'])
  onResize(event: any) {
    this.checkScreenSize();
  }

  private checkScreenSize() {
    this.isSmallScreen = window.innerWidth < 768;
  }

  private profile = this.keycloakService.profile

  public boiteIsActive: boolean = false;

  public toggleBoiteActive(): void {
    this.boiteActive.toggleBoiteActive();
  }




}
