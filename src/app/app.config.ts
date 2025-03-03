import { ApplicationConfig, importProvidersFrom, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';
import { provideHttpClient } from '@angular/common/http';
import { provideStore } from '@ngrx/store';
import { provideEffects } from '@ngrx/effects';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { routes } from './app.routes';
import { productReducer } from './state/product.reducer';
import { ProductEffects } from './state/product.effects';


export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes),
    provideHttpClient(),
    provideStore({ products: productReducer }),
    provideEffects([ProductEffects]),
    importProvidersFrom(StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: true })),
  ]
};
