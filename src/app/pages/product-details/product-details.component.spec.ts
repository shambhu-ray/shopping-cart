import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ActivatedRoute, Router } from '@angular/router';
import { of } from 'rxjs';
import { ActionButtonComponent } from '../../components/action-button/action-button.component';
import { Product } from '../../shared/models/product.model';
import { StoreFacade } from '../../store/store.facade';
import { ProductDetailsComponent } from './product-details.component';

describe('ProductDetailsComponent', () => {
  let component: ProductDetailsComponent;
  let fixture: ComponentFixture<ProductDetailsComponent>;
  let storeService: StoreFacade;

  const mockRoute = {
    params: of({ id: '1' })
  };

  const mockStoreService = {
    products$: of([
      { id: 1 }
    ]),
    addProductToCart: () => { },
  };

  const mockRouter = {
    navigate: (param) => { }
  };

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProductDetailsComponent, ActionButtonComponent],
      providers: [
        { provide: ActivatedRoute, useValue: mockRoute },
        { provide: StoreFacade, useValue: mockStoreService },
        { provide: Router, useValue: mockRouter },
      ],
    });
    fixture = TestBed.createComponent(ProductDetailsComponent);
    component = fixture.componentInstance;
    storeService = TestBed.inject(StoreFacade);
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should set product$ based on route parameters', () => {
    const product: Product = { id: 1 } as Product;
    spyOn(storeService, 'addProductToCart');
    spyOn(mockRouter, 'navigate');

    component.ngOnInit();

    component.product$.subscribe((resultProduct: Product) => {
      expect(resultProduct).toEqual(product);
    });

    expect(storeService.addProductToCart).not.toHaveBeenCalled();
    expect(mockRouter.navigate).not.toHaveBeenCalled();
  });

  it('should handle Buy Now button click', () => {
    const product: Product = { id: 1 } as Product;
    spyOn(storeService, 'addProductToCart');
    spyOn(mockRouter, 'navigate');

    component.onBuyNow(product);

    expect(storeService.addProductToCart).toHaveBeenCalledWith(product);
    const expectedUrl = ['/cart', product.id];
    expect(mockRouter.navigate).toHaveBeenCalledWith(expectedUrl);
  });
});
