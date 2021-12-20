import {Component, OnInit} from '@angular/core';
import {DataService} from '../../services/data.service';
import {Item} from '../../shared/models/item';

@Component({
  selector: 'app-catalog',
  templateUrl: './catalog.component.html',
  styleUrls: ['./catalog.component.scss']
})
export class CatalogComponent implements OnInit {
  catalog: Item[];
  selectedItem: Item;

  constructor(private dataService: DataService) {
    this.catalog = dataService.items;
    this.selectedItem = this.catalog[0];
  }

  ngOnInit(): void {
  }

  onSelectItem(item: Item): void {
    this.selectedItem = item;
  }

}
