import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { User } from './models/user/user.model';
import { AuthenticationService } from './services/auth/authentication.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'My Career App';

  currentUser: User;

  constructor(
    private router: Router,
    private authService: AuthenticationService,
    public location: Location
  ) {
    this.authService.currentUser.subscribe(curUser => this.currentUser = curUser);
  }

  logout(): void {
    this.authService.logout();
    this.router.navigate(['/login']);
  }

  backClicked(): void {
    this.location.back();
  }

  goHome(): void{
    this.router.navigate(['/']);
  }

}
