import {Component, EventEmitter, Output} from '@angular/core';
import {NavigationEnd, Router, RouterLink, RouterLinkActive} from "@angular/router";
import {filter, Subscription} from "rxjs";
import {NavBarService} from "./nav-bar.service";

@Component({
  selector: 'app-nav-bar',
  standalone: true,
  imports: [
    RouterLinkActive,
    RouterLink
  ],
  templateUrl: './nav-bar.component.html',
  styleUrl: './nav-bar.component.css'
})
export class NavBarComponent {

  isActive: boolean = false;
  private subscription: Subscription;
  private selectedLi: HTMLElement | null = null;

  constructor(private sharedService: NavBarService ,private router: Router) {
    this.subscription = this.sharedService.active$.subscribe(() => {
      this.isActive = !this.isActive;
      console.log(this.isActive);
    });

    this.router.events
      .pipe(filter(event => event instanceof NavigationEnd))
      .subscribe(() => {
       this.checkCurrentRoute();
      });
  }
  toggleHovered(event: Event) {
    const currentUrl = this.router.url;
    if(!(currentUrl == "/login")){
      const target = event.currentTarget as HTMLElement;
      if (this.selectedLi && this.selectedLi !== target) {
        this.selectedLi.classList.remove('hovered');
      }
      target.classList.add('hovered');
      this.selectedLi = target as HTMLElement;
      console.log(target)
    }
  }


  ngOnInit() {
    this.checkCurrentRoute();
  }

  // pour access via url direct
 private checkCurrentRoute() {
    const currentUrl = this.router.url;
    const lis = document.querySelectorAll('.navigation li');
    lis.forEach(li => {
      const anchor = li.querySelector('a');
      if(anchor && (currentUrl == "/login" || currentUrl == "/register")){
        console.log("ok login")
        anchor.classList.add("nav-link","disabled")
        li.classList.add("pointer");
      }else
      if (anchor && anchor.pathname === currentUrl) {
        console.log(typeof currentUrl+" : "+typeof anchor.pathname);
        li.classList.add("hovered");
        anchor.classList.remove("disabled");
       li.classList.remove("pointer");
        if (!! this.selectedLi){
          this.selectedLi.classList.remove('hovered');
        }
        this.selectedLi = li as HTMLElement;
        console.log('ok');
      }else if(anchor){
        anchor.classList.remove("disabled");
        li.classList.remove("pointer");
        console.log('else')
      }
    });
  }


}
