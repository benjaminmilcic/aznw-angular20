import { ApplicationConfig, importProvidersFrom } from '@angular/core';
import { RouterModule, provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { ToastrModule } from 'ngx-toastr';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { provideIonicAngular } from '@ionic/angular/standalone';

export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http);
}

export const appConfig: ApplicationConfig = {
  providers: [
    importProvidersFrom(
      RouterModule.forRoot(routes, {
        anchorScrolling: 'enabled',
      })
    ),
    importProvidersFrom(HttpClientModule), // or provideHttpClient() in Angular v15
    importProvidersFrom(
      TranslateModule.forRoot({
        loader: {
          provide: TranslateLoader,
          useFactory: HttpLoaderFactory,
          deps: [HttpClient],
        },
        defaultLanguage: 'en',
      })
    ),
    importProvidersFrom(ToastrModule.forRoot()),
    importProvidersFrom(BrowserAnimationsModule),
    provideIonicAngular(),
  ],
};
