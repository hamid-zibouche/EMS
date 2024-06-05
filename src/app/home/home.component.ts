import {Component, OnInit} from '@angular/core';
import {MenuActiveService} from "../shared/menuActive/menu-active.service";
import {NavBarComponent} from "../nav-bar/nav-bar.component";

@Component({
  selector: 'app-home',
  standalone: true,
    imports: [
        NavBarComponent
    ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit {

  constructor(private menuActiveService: MenuActiveService) {}

  public commander() {
    console.log("Redirecting to Commander");
    window.open("https://172.24.7.200/commander", "_blank"); // Ouvre le lien dans un nouvel onglet
  }

  public opensearch() {
    console.log("Redirecting to OpenSearch");
    window.open("https://172.24.7.200/dashboard", "_blank"); // Ouvre le lien dans un nouvel onglet
  }

  ngOnInit(){
    this.menuActiveService.menuActive$.subscribe(state => {
      this.menuIsActive = state;
    });
  }

  public menuIsActive: boolean = false;
  toggleDropdown() {
    this.menuActiveService.toggleMenuActive();
    console.log(this.menuIsActive);
  }

  fermerMenuActive(){
    this.menuActiveService.fermerMenuActive();
  }

}
