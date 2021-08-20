import { Component} from '@angular/core';
import { FirebaseService } from '../services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  title = 'movie-blog';
  isLoggedIn = false;

  constructor(public firebaseService: FirebaseService) { }

  async onSignup(email: string, password: string) {
    await this.firebaseService.signup(email, password);
    if (this.firebaseService.isLoggedIn) {
      this.isLoggedIn = true
    }
  }
 


}
