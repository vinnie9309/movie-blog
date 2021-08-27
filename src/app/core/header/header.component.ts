import { Component, OnInit } from '@angular/core';
import { faFilm } from '@fortawesome/free-solid-svg-icons';
import { Router } from '@angular/router';
import { FirebaseService } from '../../services/auth.service';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  userLoggedIn = false;
  
  constructor(
    private router: Router,
    private authService: FirebaseService

  ) {
    this.authService.isLoggedIn.subscribe(loggedIn => {
      if (loggedIn)
        this.userLoggedIn = true;
    })
  }

  ngOnInit() {
    const getUser: string | null = localStorage.getItem('user');
    if (getUser) {
      this.userLoggedIn = true;
    }
  }

  logOut(): void {
    this.authService.logout();
    this.router.navigate(['/']);
    
    this.userLoggedIn = false;
  }

  faFilm = faFilm;
}
