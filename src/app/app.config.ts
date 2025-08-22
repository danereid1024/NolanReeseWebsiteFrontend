import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import {provideRouter, RouterModule} from '@angular/router';
import { routes } from './app.routes';
import { provideClientHydration, withEventReplay } from '@angular/platform-browser';
import { provideHttpClient, withFetch } from '@angular/common/http';
import { HashLocationStrategy} from '@angular/common';


export const appConfig: ApplicationConfig = {
  providers: [provideZoneChangeDetection({ eventCoalescing: true }), provideHttpClient(withFetch()), provideRouter(routes), provideClientHydration(withEventReplay()), HashLocationStrategy]
};
