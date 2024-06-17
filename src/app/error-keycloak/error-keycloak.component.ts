import {Component, ViewRef} from '@angular/core';
import {home} from "ionicons/icons";
import {ConfigService} from "../services/config/config.service";

@Component({
  selector: 'app-error-keycloak',
  standalone: true,
  imports: [],
  templateUrl: './error-keycloak.component.html',
  styleUrl: './error-keycloak.component.css'
})
export class ErrorKeycloakComponent {
  constructor(private configService: ConfigService) {}

    public home(){
      this.configService.getConfig().subscribe((data: any) => {
        window.location.href = data.home.url;
      });
    }
}
