import {APP_INITIALIZER, ApplicationConfig, importProvidersFrom} from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import {HttpClientJsonpModule, HttpClientModule} from "@angular/common/http";
import {KeycloakService} from "./services/keycloak/keycloak.service";

export function kcFactory(kcService : KeycloakService){
  return ()=> kcService.init();
}

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    importProvidersFrom(HttpClientModule),
    importProvidersFrom(HttpClientJsonpModule),
    {provide:APP_INITIALIZER,
      deps:[KeycloakService],
      useFactory: kcFactory,
      multi:true
    }
  ]
};
