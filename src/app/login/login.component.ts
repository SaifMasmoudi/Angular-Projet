import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/Services/AuthService (2)';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  
  constructor(private AUTH: AuthService, private router: Router) { }

  // Méthode pour gérer la soumission du formulaire de connexion
  onSubmit(): void {
  }

  // Méthode pour gérer la connexion via Google
  SIGNIN(): void {
    this.AUTH.doGoogleLogin().then(() => {
      this.router.navigate(['/home']);
    }).catch((error) => {
      console.error("Erreur lors de la connexion avec Google :", error);
    });
  }
}
