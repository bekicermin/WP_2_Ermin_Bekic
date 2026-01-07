import { Injectable } from '@angular/core';
import { initializeApp } from 'firebase/app';
import { getFirestore, collection, addDoc } from 'firebase/firestore';
import { firebaseConfig } from '../firebase.config';

@Injectable({
  providedIn: 'root'
})
export class FirestoreService {

  db;

  constructor() {
    const app = initializeApp(firebaseConfig);
    this.db = getFirestore(app);
  }

  async saveUser(user: any) {
    await addDoc(collection(this.db, 'users'), user);
  }
}
