import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { AppState } from '../store/app.state';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  title = 'ShoppingCart';
  shop$: Observable<any>;

  constructor(private _store: Store<AppState>) { }

  ngOnInit() {
    this.shop$ = this._store.select('shop');
  }

}
