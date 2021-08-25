import { Component } from '@angular/core';
import { FirebaseService } from '../../services/auth.service';
import { Router } from '@angular/router';
import { formValue } from '../../interfaces/IUser';
import { UserService } from 'src/app/services/user.service';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})

export class RegisterComponent {
  
 
  constructor(
    private authService: FirebaseService,
    private router: Router,
    private userService: UserService
  ) { }

  

  async onSubmit(submitValue: formValue) {
    const password = submitValue.password;
    const email = submitValue.email;
    await this.authService.signup(email, password)
    if (this.authService.isLoggedIn) {
      // this.userService.addItem(submitValue)
      this.router.navigate(['/']);
      this.authService.isLoggedIn.next(true);
    }
  }
}