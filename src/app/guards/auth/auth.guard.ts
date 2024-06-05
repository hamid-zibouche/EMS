import {CanActivateFn, Router} from '@angular/router';
import {KeycloakService} from "../../services/keycloak/keycloak.service";
import {inject} from "@angular/core";

export const authGuard: CanActivateFn = (route, state) => {
  const keycloakService: KeycloakService = inject(KeycloakService);
  const router = inject(Router);

  if (keycloakService.keycloak?.isTokenExpired()){
    router.navigate(['login']);
    return false;
  }
  return true;
};
