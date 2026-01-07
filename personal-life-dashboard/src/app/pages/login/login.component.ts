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
    const user = JSON.parse(localStorage.getItem('user') || '{}');

    if (this.email === user.email && this.password === user.password) {
      alert('Login uspješan!');
    } else {
      alert('Pogrešan email ili password');
    }
  }

  goToRegister() {
    this.router.navigate(['/register']);
  }
}
