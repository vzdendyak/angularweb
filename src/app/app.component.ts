import {AfterViewInit, Component} from '@angular/core';
import {DataService} from './services/data.service';
import {BehaviorSubject, combineLatest, merge, Observable, Subject} from 'rxjs';
import {Item} from './shared/models/item';
import {map, tap} from 'rxjs/operators';
import * as _ from 'lodash';
import {PageEvent} from '@angular/material/paginator';
import {MatDialog} from '@angular/material/dialog';
import {BucketDialogComponent} from './components/bucket-dialog/bucket-dialog.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements AfterViewInit {
  title = 'vasyl-zdendiak-app';

  items = new Subject<Item[]>();
  bucket: Item[] = [];
  pageSizeValue = new BehaviorSubject<number>(10);
  searchFilter = new BehaviorSubject<string>('');

  items$: Observable<Item[]>;
  categories$: Observable<any>;

  selectedCategory: any;

  totalSize = 0;
  pageSize = 10;
  currentPage = 0;

  constructor(private data: DataService, public dialog: MatDialog) {
    this.items$ = combineLatest([merge(data.positions$, this.items), this.pageSizeValue, this.searchFilter])
      .pipe(
        map(([items, size, search]) => {
          if (search) {
            items = items.filter(i => i.name.toLowerCase().includes(search) || i.description.toLowerCase().includes(search) || i.category.toLowerCase().includes(search));
          }
          return items;
        }),
        tap(x => this.totalSize = x.length),
        map(items => items.slice(this.currentPage * this.pageSize, (this.currentPage + 1) * this.pageSize))
      );

    this.categories$ = data.positions$
      .pipe(
        map(items => {
          return _(items)
            .groupBy((x) => x.category)
            .map((value, key) => ({category: key, items: value}))
            .orderBy((x) => x.category)
            .value();
        }),
        tap(x => {
          this.selectedCategory = x[0];
        }));
  }

  ngAfterViewInit() {
  }

  filterItems(group: { category: string, items: any[] }): void {
    this.selectedCategory = group;
    this.items.next(group.items);
  }

  handlePage(event: PageEvent): void {
    this.currentPage = event.pageIndex;
    this.pageSize = event.pageSize;
    this.pageSizeValue.next(this.pageSize);
  }

  openBucket() {
    this.dialog.open(BucketDialogComponent, {
      width: '600px',
      data: this.bucket,
    });
  }

  addToBucket(event: Item) {
    this.bucket.push(event);
  }
}
