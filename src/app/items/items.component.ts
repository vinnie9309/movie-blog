import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-items',
  templateUrl: './items.component.html',
  styleUrls: ['./items.component.css']
})
export class ItemsComponent implements OnInit {

  items: Array<any> = [];

  constructor(private dataService: DataService) { }

  ngOnInit() {
    this.dataService.getItems().subscribe( data => {
      this.items = data;
    });
  }

}
