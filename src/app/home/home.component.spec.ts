import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Subject } from 'rxjs';
import { Product } from '../shared/models/product.model';
import { BrandPipe } from '../shared/pipes/brand.pipe';
import { StoreFacade } from '../store/store.facade';
import { HomeComponent } from './home.component';

describe('HomeComponent', () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;
  let storeService: StoreFacade;
  let brandPipe: BrandPipe;

  const mockStoreService = {
    products$: new Subject<Product[]>(),
    brandFilter$: new Subject<string>(),
  };

  const mockBrandPipe = {
    transform: (products: Product[], brands: string) => products,
  };

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HomeComponent],
      providers: [
        { provide: StoreFacade, useValue: mockStoreService },
        { provide: BrandPipe, useValue: mockBrandPipe },
      ],
    });
    fixture = TestBed.createComponent(HomeComponent);
    component = fixture.componentInstance;
    storeService = TestBed.inject(StoreFacade);
    brandPipe = TestBed.inject(BrandPipe);
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should initialize products based on storeService and brandPipe', () => {
    const products: Product[] = [{ id: 1 }] as Product[];
    const brands = 'SampleBrand';

    spyOn(storeService.products$, 'subscribe').and.callThrough();
    spyOn(storeService.brandFilter$, 'subscribe').and.callThrough();
    spyOn(brandPipe, 'transform').and.callThrough();

    component.ngOnInit();

    mockStoreService.products$.next(products);
    mockStoreService.brandFilter$.next(brands);

    expect(storeService.products$.subscribe).toHaveBeenCalled();
    expect(storeService.brandFilter$.subscribe).toHaveBeenCalled();
    expect(brandPipe.transform).toHaveBeenCalledWith(products, brands);
    expect(component.products).toEqual(products);
  });

  it('should track items by their ID', () => {
    const item: Product = { id: 1 } as Product;
    const index = 0;
    const result = component.trackById(index, item);
    expect(result).toBe(item.id);
  });
});
