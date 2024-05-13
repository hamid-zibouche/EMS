import { Component } from '@angular/core';
import {FormsModule} from "@angular/forms";
import {RouterLink} from "@angular/router";

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [
    FormsModule,
    RouterLink
  ],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {

  public username : string ='';
  public email: string='';
  public password: string ='';
  public passwordConfirmation: string='';

  public register():void{
    console.log('register username :'+this.username);
    console.log('register password:'+this.password);
  }

}
