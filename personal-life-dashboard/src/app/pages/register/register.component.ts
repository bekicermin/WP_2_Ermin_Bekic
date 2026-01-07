import { Component } from '@angular/core';
import { FirestoreService } from '../../firestore.service';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [],
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {

  constructor(private firestore: FirestoreService) {}

  register(name: string, email: string, password: string, theme: string) {
    const user = {
      name: name,
      email: email,
      password: password,
      theme: theme
    };

    // Firestore
    this.firestore.saveUser(user);
    localStorage.setItem('user', JSON.stringify(user));
    alert('Registracija uspješna!');
  }
}
