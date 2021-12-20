import {Component, Input, OnInit} from '@angular/core';
import {DataService} from '../../services/data.service';
import {Item} from '../../shared/models/item';

@Component({
  selector: 'app-catalog',
  templateUrl: './catalog.component.html',
  styleUrls: ['./catalog.component.scss']
})
export class CatalogComponent implements OnInit {
  @Input() catalog: Item[];

  constructor() {

  }

  ngOnInit(): void {
  }


}
