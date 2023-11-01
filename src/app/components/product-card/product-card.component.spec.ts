import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Router } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { appRoutes } from '../../app.route';
import { MaterialModule } from '../../material.module';
import { Product } from '../../shared/models/product.model';
import { SharedModule } from '../../shared/shared.module';
import { StoreFacade } from '../../store/store.facade';
import { ProductCardComponent } from './product-card.component';

xdescribe('ProductCardComponent', () => {
  let component: ProductCardComponent;
  let fixture: ComponentFixture<ProductCardComponent>;
  let storeFacade: jasmine.SpyObj<StoreFacade>;
  let router: jasmine.SpyObj<Router>;

  beforeEach(() => {
    storeFacade = jasmine.createSpyObj('StoreFacade', ['addProductToCart']);
    router = jasmine.createSpyObj('Router', ['navigate']);

    TestBed.configureTestingModule({
      declarations: [ProductCardComponent],
      imports: [MaterialModule, SharedModule,
        RouterTestingModule.withRoutes(appRoutes)
      ],
      providers: [
        { provide: StoreFacade, useValue: storeFacade },
        { provide: Router, useValue: router },
      ],
    });

    fixture = TestBed.createComponent(ProductCardComponent);
    component = fixture.componentInstance;
  });

  it('should create the component', () => {
    expect(component).toBeTruthy();
  });

  it('should call addProductToCart and navigate when onBuyNow is called', () => {
    const product = { id: 1 } as Product;

    component.onBuyNow(product);

    expect(storeFacade.addProductToCart).toHaveBeenCalledWith(product);
    expect(router.navigate).toHaveBeenCalledWith(['/cart', product.id]);
  });

});
