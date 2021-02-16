import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { User } from './models/user/user.model';
import { AuthenticationService } from './services/auth/authentication.service';

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
    private authService: AuthenticationService
  ){
    this.authService.currentUser.subscribe(curUser => this.currentUser = curUser);
  }

  logout(){
    this.authService.logout();
    this.router.navigate(['/login']);
  }

}
