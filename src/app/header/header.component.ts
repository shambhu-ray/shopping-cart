import { Component } from '@angular/core';
import { StoreFacade } from '../store/store.facade';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  title = 'ShoppingCart';

  constructor(public storeService: StoreFacade) { }


}
