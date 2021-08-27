import { Component, OnInit } from '@angular/core';
import { FirebaseService } from './services/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'movie-blog';
  isLoggedIn = false;

  constructor(public firebaseService: FirebaseService) { }
  ngOnInit() {
    if (localStorage.getItem('user') !== null) {
      this.isLoggedIn = true;
    } else
      this.isLoggedIn = false;
  }


}
