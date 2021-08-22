import { Component, OnInit } from '@angular/core';
import { ItemService } from '../services/data.service';
import { Item } from '../interfaces/Item';

@Component({
  selector: 'app-add-movie',
  templateUrl: './add-movie.component.html',
  styleUrls: ['./add-movie.component.css']
})
export class AddMovieComponent implements OnInit {
  item: Item = {
    description: '',
    img: '',
    title: ''
  }

  constructor(private itemService: ItemService) { }

  ngOnInit() {
  }
  onSubmit() {
    if (this.item.title != '' && this.item.description != '') {
      this.itemService.addItem(this.item);
      this.item.title = '';
      this.item.description = '';
      this.item.img = '';
    }
  }

}
