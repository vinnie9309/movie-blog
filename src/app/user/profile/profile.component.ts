import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';
import { IProfile } from 'src/app/interfaces/profile';
import { faUserCircle } from '@fortawesome/free-solid-svg-icons';


@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  users!: IProfile[]
  user = {
    email: '',
    username: '',
    age: ''
  }

  constructor(
    private userService: UserService,
  ) { }

  ngOnInit() {
    this.userService.getUser().subscribe((users: any[]) => {
      this.users = users

      let currentUser = JSON.parse(localStorage.getItem('user') || '{}')
      if (Object.keys(currentUser).length > 0) {
        let current = this.users.find(u => u.email == currentUser.email);
        this.user.age = current!.age
        this.user.email = current!.email
        this.user.username = current!.username
      }

    })
  }
  
  faUserCircle = faUserCircle;
}
