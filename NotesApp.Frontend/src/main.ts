
import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent, appConfig } from './app/app';
import 'zone.js';

bootstrapApplication(AppComponent, appConfig)
  .catch(err => console.error(err));