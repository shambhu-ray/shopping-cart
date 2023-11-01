import { Component, OnInit } from '@angular/core';
import { StoreFacade } from './store/store.facade';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {


  constructor(private _storeService: StoreFacade) { }


  ngOnInit(): void {
    this._storeService.loadProducts();
    this._storeService.clearBrandFilter();
  }
}
