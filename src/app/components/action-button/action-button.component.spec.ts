import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideMockStore } from '@ngrx/store/testing';
import { MaterialModule } from '../../material.module';
import { initialState } from '../../store/shop/shop.reducer';
import { StoreFacade } from '../../store/store.facade';
import { ActionButtonComponent } from './action-button.component';

describe('ActionButtonComponent', () => {
  let component: ActionButtonComponent;
  let fixture: ComponentFixture<ActionButtonComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ActionButtonComponent],
      imports: [MaterialModule],
      providers: [
        StoreFacade,
        provideMockStore({ initialState }),
      ],
    });
    fixture = TestBed.createComponent(ActionButtonComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should emit addProductToCart event when "Add to Cart" button is clicked', () => {
    const spy = spyOn(component.addProductToCart, 'emit');

    const addToCartButton = fixture.debugElement.nativeElement.querySelector('button[mat-stroked-button][color="primary"]');
    addToCartButton.click();

    expect(spy).toHaveBeenCalled();
  });

  it('should emit buyNow event when "Buy Now" button is clicked', () => {
    const spy = spyOn(component.buyNow, 'emit');

    const buyNowButton = fixture.debugElement.nativeElement.querySelector('button[mat-stroked-button][color="warn"]');
    buyNowButton.click();

    expect(spy).toHaveBeenCalled();
  });
});
