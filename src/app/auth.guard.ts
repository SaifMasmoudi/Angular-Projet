import { CanActivate, CanActivateFn, Router } from '@angular/router';
import { AuthService } from 'src/Services/AuthService (2)';

export class AuthGuard implements CanActivate {
  constructor(private authService: AuthService, private router: Router) {}

  canActivate(): boolean {
    if (this.authService.isUserAuthenticated()) {
      return true;
    } else {
      this.router.navigate(['/login']);
      return false;
    }
  }
}