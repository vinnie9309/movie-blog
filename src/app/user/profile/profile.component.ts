import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  user: Array<any> = []
  constructor(private userService: UserService) { }

  ngOnInit() {
    this.userService.getUser().subscribe((data: any[])=> {
      this.user = data
      const currentUser = JSON.parse(localStorage.getItem('user') || '{}');
      const userProfileMails = this.user.map(user => (user.email));
      console.log(data)
      console.log(currentUser)

    })
    
  }

}
