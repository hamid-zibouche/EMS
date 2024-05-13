import { Component } from '@angular/core';
import {FormsModule} from "@angular/forms";
import {isNgContainer} from "@angular/compiler";
import { CommonModule } from '@angular/common';
import {RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
// @ts-ignore


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  standalone: true,
  imports: [
    FormsModule,
    CommonModule,
    RouterOutlet,
    RouterLink,
    RouterLinkActive
  ],
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  username: string = '';
  password: string = '';

  constructor() { }

  login() {
    // Simuler une opération de connexion en imprimant les informations de connexion
    console.log('Username:', this.username);
    console.log('Password:', this.password);
  }

  sign() {
    console.log('User', this.username);
    console.log('pass', this.password);
  }

  protected readonly isNgContainer = isNgContainer;

}
