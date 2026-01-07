import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  email: string = '';
  password: string = '';

  constructor(private router: Router) {}

login() {
  const storedUser = localStorage.getItem('user');

  if (!storedUser) {
    alert('Nema registrovanog korisnika');
    return;
  }

  const user = JSON.parse(storedUser);

  if (this.email === user.email && this.password === user.password) {
    document.body.className = user.theme;
    alert('Login uspješan!');
    this.router.navigate(['/dashboard']);
  } else {
    alert('Pogrešan email ili password');
  }
}


  goToRegister() {
    this.router.navigate(['/register']);
  }
}
