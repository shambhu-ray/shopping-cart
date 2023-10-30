import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { clearBrandFilter } from './store/brand-filter/brand-filter.action';
import { loadProducts } from './store/shop/shop.action';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {


  constructor(private _store: Store) { }


  ngOnInit(): void {

    this._store.dispatch(loadProducts());
    this._store.dispatch(clearBrandFilter());
  }
}
