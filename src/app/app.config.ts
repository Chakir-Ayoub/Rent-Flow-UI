import {APP_INITIALIZER, ApplicationConfig, isDevMode, provideZoneChangeDetection} from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideClientHydration, withEventReplay } from '@angular/platform-browser';
import {initializeKeycloak} from './core/auth/KeycloakFactory';
import {HTTP_INTERCEPTORS, provideHttpClient, withInterceptorsFromDi} from '@angular/common/http';
import {provideState, provideStore} from '@ngrx/store';
import {connectedOwnerReducer, connectedUserNameFeatureKey, OwnersEffects, reducers} from './store/state/owners';
import {provideEffects} from '@ngrx/effects';
import { provideStoreDevtools } from '@ngrx/store-devtools';
import {BookingEffects, bookingsFeatureKey, bookingsReducer} from './store/state/bookings';
import {ActivityEffects, ActivityFeatureKey, ActivityReducer, activityReducers} from './store/state/Activity';
import {KeycloakBearerInterceptor, KeycloakService} from 'keycloak-angular';
export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes),
    provideStore(reducers),
    provideStore(activityReducers),
    provideState({name:connectedUserNameFeatureKey,reducer:connectedOwnerReducer}),
    provideState({name:bookingsFeatureKey,reducer:bookingsReducer}),
    provideState({name:ActivityFeatureKey,reducer:ActivityReducer}),
    provideEffects(OwnersEffects,BookingEffects,ActivityEffects),
    provideStoreDevtools({
      maxAge: 25,
      logOnly: !isDevMode(),
      autoPause: true,
      trace: false,
    }),
    provideClientHydration(withEventReplay()),
    provideHttpClient(
      withInterceptorsFromDi()
    ),
    KeycloakService,
    {
      provide: APP_INITIALIZER,
      useFactory: initializeKeycloak,
      deps: [KeycloakService],
      multi: true
    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: KeycloakBearerInterceptor,
      multi: true
    }
  ]

};
