import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideClientHydration, withEventReplay } from '@angular/platform-browser';
import {environment} from '../environments/environment';
import {provideKeycloak} from 'keycloak-angular';
import {KeycloakOnLoad} from 'keycloak-js';

export const appConfig: ApplicationConfig = {
  providers: [
    provideKeycloak({
      config: {
        url: environment.keycloak.config.url,
        realm: environment.keycloak.config.realm,
        clientId: environment.keycloak.config.clientId
      },
      initOptions: {
        onLoad: environment.keycloak.initOptions.onLoad as KeycloakOnLoad,
        checkLoginIframe: environment.keycloak.initOptions.checkLoginIframe
      }
    }),
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes),
    provideClientHydration(withEventReplay())
  ]
};
