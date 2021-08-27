import { Component, OnInit } from '@angular/core';
import { ItemService } from 'src/app/services/data.service';
import { Item } from '../interfaces/Item';

@Component({
  selector: 'app-items',
  templateUrl: './items.component.html',
  styleUrls: ['./items.component.css']
})
export class ItemsComponent implements OnInit {
  items!: Item[];
  editState: boolean = false;
  itemToEdit!: Item;
  isCreator: boolean = false;
  currentUser = this.getEmail()

  constructor(
    private dataService: ItemService
  ) { }

  ngOnInit() {
    this.dataService.getItems().subscribe((items: any[]) => {
      this.items = items;
    });

  }
  onDelete(item: Item) {
    const confirmed = confirm("Are you sure you want to delete this item?")
    if (confirmed) {
      this.dataService.deleteItem(item);
    }
  }

  editItem(item: Item) {
    this.editState = true;
    this.itemToEdit = item;
  }
  updateItem(item: Item) {
    this.dataService.updateItem(item)
    this.editState = false;
  }
  getEmail() {
    let currentUser = JSON.parse(localStorage.getItem('user') || '{}')
    const emailUser = currentUser.email;
    return emailUser;
  }

}
