import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { firebaseConfig } from './firebase.config';

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

console.log('Firebase connected', db);

bootstrapApplication(AppComponent, appConfig)
  .catch((err) => console.error(err));
