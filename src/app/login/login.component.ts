import { Component, OnInit } from '@angular/core';
import { FirebaseService } from '../services/auth.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent {
  title = 'movie-blog';
  isLoggedIn = false;

  constructor(public firebaseService: FirebaseService) { }
 
  async onSignin(email: string, password: string) {
    await this.firebaseService.signin(email, password);
    if (this.firebaseService.isLoggedIn) {
      this.isLoggedIn = true
    }
  }
  
}
