import {APP_INITIALIZER, ApplicationConfig, importProvidersFrom} from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import {HttpClientJsonpModule, HttpClientModule} from "@angular/common/http";
import {KeycloakService} from "./services/keycloak/keycloak.service";
import {ConfigService} from "./services/config/config.service";

export function kcFactory(kcService : KeycloakService){
  return ()=> kcService.init();
}

export const appConfig: ApplicationConfig = {
  providers: [
    // ConfigService
    ConfigService,
    // KeycloakService
    KeycloakService,
    {
      provide: APP_INITIALIZER,
      useFactory: kcFactory,
      deps: [KeycloakService],
      multi: true
    },
    // Other providers
    provideRouter(routes),
    importProvidersFrom(HttpClientModule),
    importProvidersFrom(HttpClientJsonpModule),
  ]
};
