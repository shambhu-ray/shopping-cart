import { NO_ERRORS_SCHEMA } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute, Params } from '@angular/router';
import { of } from 'rxjs';
import { MaterialModule } from '../../material.module';
import { Product } from '../../shared/models/product.model';
import { CartComponent } from './cart.component';
import { CartService } from './cart.service';


const activatedRouteTestDouble = {
  params: of({ id: '1' } as Params), // Simulate route parameters
};

describe('CartComponent', () => {
  let component: CartComponent;
  let fixture: ComponentFixture<CartComponent>;
  let cartService: CartService;
  let route: ActivatedRoute;
  let dialog: MatDialog;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CartComponent],
      imports: [MaterialModule],
      providers: [
        {
          provide: CartService,
          useValue: {
            getCart: () => of([]),
            calculateTotalPrice: (products: Product[]) => products.reduce((acc, product) => acc + product.price, 0),
            onCheckout: () => { },
            onRemoveCartItem: () => { },
            onIncrementCartItem: () => { },
            onDecrementCartItem: () => { },
            openDialog: () => { },
          },
        },
        {
          provide: ActivatedRoute,
          useValue: activatedRouteTestDouble,
        },
      ],
      schemas: [NO_ERRORS_SCHEMA],
    });

    fixture = TestBed.createComponent(CartComponent);
    component = fixture.componentInstance;
    cartService = TestBed.inject(CartService);
    route = TestBed.inject(ActivatedRoute);
    dialog = TestBed.inject(MatDialog);
  });

  it('should create CartComponent', () => {
    expect(component).toBeTruthy();
  });

  xit('should retrieve cart and calculate total price', () => {
    spyOn(component, 'getCart');

    // Simulate route parameter with a valid product ID
    const newParams = { id: '1' };
    route.params = of({ id: '1' });
    expect(component.getCart).not.toHaveBeenCalled();

    // Simulate route parameter with an invalid product ID
    route.params = of({ id: 'invalid' });
    expect(component.getCart).toHaveBeenCalled();
  });

  it('should get cart and calculate total price', () => {
    spyOn(cartService, 'getCart').and.returnValue(of([])); // Simulate an empty cart
    spyOn(cartService, 'calculateTotalPrice').and.returnValue(0); // Simulate total price

    component.getCart();

    expect(component.cartProducts).toEqual([]);
    expect(component.totalPrice).toBe(0);
  });

  it('should return the correct item ID', () => {
    const item: Product = { id: 1, title: 'Product 1', price: 10, quantity: 2 } as Product;
    const index = 0;
    const result = component.trackById(index, item);

    expect(result).toBe(item.id);
  });

  it('should call cartService methods for checkout', () => {
    spyOn(cartService, 'onCheckout');
    spyOn(cartService, 'openDialog');

    component.checkout();

    expect(cartService.onCheckout).toHaveBeenCalledWith(component.cartProducts);
    expect(cartService.openDialog).toHaveBeenCalledWith(component.dialogTempRef);
  });
});
