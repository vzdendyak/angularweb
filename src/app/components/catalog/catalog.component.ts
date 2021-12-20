import {Component, Input, OnChanges, OnInit, Output, SimpleChanges} from '@angular/core';
import {Item} from '../../shared/models/item';
import {PageEvent} from '@angular/material/paginator';
import {Subject} from 'rxjs';
import {FormControl} from '@angular/forms';
import {debounceTime, distinctUntilChanged} from 'rxjs/operators';

@Component({
  selector: 'app-catalog',
  templateUrl: './catalog.component.html',
  styleUrls: ['./catalog.component.scss']
})
export class CatalogComponent implements OnInit, OnChanges {
  @Input() catalog: Item[];
  @Input() totalSize;
  @Input() pageSize;
  @Input() currentPage;

  @Output() itemSelected = new Subject<Item>();
  @Output() addToBucket = new Subject<Item>();
  @Output() pageChanged = new Subject<PageEvent>();
  @Output() searchFilterChanged = new Subject<string>();

  searchForm = new FormControl('');

  constructor() {

  }

  ngOnChanges(changes: SimpleChanges): void {

  }

  ngOnInit(): void {
    this.searchForm.valueChanges
      .pipe(
        debounceTime(400),
        distinctUntilChanged()
      ).subscribe((value: string) => {
      this.searchFilterChanged.next(value.toLowerCase());
    });
  }


  handlePage(event: PageEvent): void {
    this.pageChanged.next(event);
    this.currentPage = event.pageIndex;
    this.pageSize = event.pageSize;
    // this.pageSizeChanged.next();
  }
}
