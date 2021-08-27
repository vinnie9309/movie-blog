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
  userInfo = {
    age: '',
    username: '',
    email: ''
  }
  constructor(
    private authService: FirebaseService,
    private router: Router,
    private userService: UserService
  ) { }


  async onSubmit(submitValue: formValue) {
    const password = submitValue.password;
    const email = submitValue.email;
    if (submitValue.password != submitValue.rePassword) {
      alert("Passwords do not match!")
      return;
    }
    try {
      await this.authService.signup(email, password)
    } catch (error) {
      alert(error.message)
      return;
    }
    this.userInfo.age = submitValue.age;
    this.userInfo.email = submitValue.email;
    this.userInfo.username = submitValue.username;
    this.userService.addUser(this.userInfo)

    if (this.authService.isLoggedIn) {
      this.authService.isLoggedIn.next(true);
      this.router.navigate(['/']);
    }
  }

}