import {Component} from '@angular/core';
import {DataService} from './services/data.service';
import {merge, Observable, Subject} from 'rxjs';
import {Item} from './shared/models/item';
import {map, tap} from 'rxjs/operators';
import * as _ from 'lodash';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'vasyl-zdendiak-app';

  items = new Subject<Item[]>();

  items$: Observable<Item[]>;
  categories$: Observable<any>;

  selectedCategory: any;

  constructor(private data: DataService) {
    this.items$ = merge(data.positions$, this.items);
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

  filterItems(group: { category: string, items: any[] }): void {
    this.selectedCategory = group;
    this.items.next(group.items);
  }

}
