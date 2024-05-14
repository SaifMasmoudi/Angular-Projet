import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/Services/AuthService (2)';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  username: string = '';
  password: string = '';
  constructor(private AUTH: AuthService, private router: Router) { }
  

  

  onLogin(): void {
    this.AUTH.login(this.username, this.password);
  }
  // Méthode pour gérer la soumission du formulaire de connexion
  onSubmit(): void {
  }

  // Méthode pour gérer la connexion via Google
  
}
