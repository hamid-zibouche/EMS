import {Component, OnInit} from '@angular/core';
import {MenuActiveService} from "../shared/menuActive/menu-active.service";
import {NavBarComponent} from "../nav-bar/nav-bar.component";
import {ConfigService} from "../services/config/config.service";
import {NgForOf} from "@angular/common";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    NavBarComponent,
    NgForOf
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit {

  public applications : any[]=[];

  constructor(private menuActiveService: MenuActiveService,private configService : ConfigService) {}


  ngOnInit(){
    this.menuActiveService.menuActive$.subscribe(state => {
      this.menuIsActive = state;
    });
    this.configService.getConfig().subscribe((data: any) => {
      this.applications = data.applications;
    })
  }

  public menuIsActive: boolean = false;
  toggleDropdown() {
    this.menuActiveService.toggleMenuActive();
    console.log(this.menuIsActive);
  }

  fermerMenuActive(){
    this.menuActiveService.fermerMenuActive();
  }

  public openApplication(url: string) {
    window.open(url, "_blank");
  }
}
