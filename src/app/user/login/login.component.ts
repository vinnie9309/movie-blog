import { Component} from '@angular/core';
import { FirebaseService } from '../../services/auth.service';
import { Router } from '@angular/router';
import { formValue } from 'src/app/interfaces/IUser';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent {

  constructor(
    public authService: FirebaseService,
    private router: Router
    ) { }
 
  async onSignin(submitValue: formValue) {
    const password = submitValue.password;
    const email = submitValue.email;
    await this.authService.signin(email, password);
    if (this.authService.isLoggedIn) {
      this.authService.isLoggedIn.next(true);
      this.router.navigate(['/'])
    }
  }
  
}
