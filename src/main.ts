import 'core-js'
import 'reflect-metadata'
import 'zone.js/dist/zone'

import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { AppComponent } from './app/app.component'
import { AppModule } from './app/app.module';

platformBrowserDynamic().bootstrapModule(AppModule);
