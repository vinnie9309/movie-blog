import { Component} from '@angular/core';
import { ItemService } from '../services/data.service';
import { Item } from '../interfaces/Item';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-movie',
  templateUrl: './add-movie.component.html',
  styleUrls: ['./add-movie.component.css']
})


export class AddMovieComponent {
  item: Item = {
    description: '',
    img: '',
    title: '',
    creator: this.getEmail()
  }

  getEmail() {
    let currentUser = JSON.parse(localStorage.getItem('user') || '{}')
    const emailUser = currentUser.email;
    return emailUser;
  }

  constructor(
    private itemService: ItemService,
    private router: Router
  ) { }
  

  onSubmit() {
    if (this.item.title != '' && this.item.description != '' && this.item.img != '') {
      this.itemService.addItem(this.item);
      this.router.navigate(['/items'])
    }
  }

}
