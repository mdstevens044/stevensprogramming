<<<<<<< HEAD
=======
import './polyfills.ts';
>>>>>>> 4c043cd088cbae25108d4d0ef04a73acab2f8093
import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

if (environment.production) {
  enableProdMode();
}

platformBrowserDynamic().bootstrapModule(AppModule);
