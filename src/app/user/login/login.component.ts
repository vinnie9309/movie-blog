import { Component} from '@angular/core';
import { FirebaseService } from '../../services/auth.service';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent {
  title = 'movie-blog';
  isLoggedIn = false;

  constructor(
    public firebaseService: FirebaseService,
    private activatedRoute: ActivatedRoute,
    private router: Router
    ) { }
 
  async onSignin(email: string, password: string) {
    await this.firebaseService.signin(email, password);
    if (this.firebaseService.isLoggedIn) {
      this.isLoggedIn = true
    }
  }
  
}
