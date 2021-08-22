import { Component } from '@angular/core';
import { FirebaseService } from '../../services/auth.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {

  constructor(
    public authService: FirebaseService,
    private router: Router,
    private activatedRoute: ActivatedRoute
    ) {  }

  // async onSignup(email: string, password: string) {
  //   await this.firebaseService.signup(email, password);
  //   if (this.firebaseService.isLoggedIn) {
  //     const redirectUrl = this.activatedRoute.snapshot.queryParams.redirectUrl || '/';
  //     this.router.navigate([redirectUrl]);
  //     this.authService.isLoggedIn.next(true);
  //   }
  // }

  async onSubmit(email: string, password: string) {
    await this.authService.signup(email, password);
    if (this.authService.isLoggedIn) {
      const redirectUrl = this.activatedRoute.snapshot.queryParams.redirectUrl || '/';
      this.router.navigate([redirectUrl]);
      this.authService.isLoggedIn.next(true);
    }
    console.log('submitnaame', email, password);
  }
}
