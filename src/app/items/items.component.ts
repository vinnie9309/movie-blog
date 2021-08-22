import { Component, OnInit } from '@angular/core';
import { ItemService } from 'src/app/services/data.service';

@Component({
  selector: 'app-items',
  templateUrl: './items.component.html',
  styleUrls: ['./items.component.css']
})
export class ItemsComponent implements OnInit {

  items: Array<any> = [];

  constructor(private dataService: ItemService) { }

  ngOnInit() {
    this.dataService.getItems().subscribe((data: any[]) => {
      this.items = data;
    });
  }

}
