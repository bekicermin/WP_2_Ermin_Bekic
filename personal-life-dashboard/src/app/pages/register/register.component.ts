import { Component } from '@angular/core';

@Component({
  selector: 'app-register',
  imports: [],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {
register(name: string, email: string, password: string, theme: string) {
    const user = {
      name: name,
      email: email,
      password: password,
      theme: theme
    };

    localStorage.setItem('user', JSON.stringify(user));
    alert('Registracija uspješna!');
}
}
