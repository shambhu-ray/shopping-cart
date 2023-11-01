import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideMockStore } from '@ngrx/store/testing';
import { MaterialModule } from '../material.module';
import { initialState } from '../store/brand-filter/brand-filter.reducer';
import { StoreFacade } from '../store/store.facade';
import { HeaderComponent } from './header.component';

describe('HeaderComponent', () => {
  let component: HeaderComponent;
  let fixture: ComponentFixture<HeaderComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HeaderComponent],
      imports: [MaterialModule],
      providers: [StoreFacade,
        provideMockStore({ initialState }),],
    });
    fixture = TestBed.createComponent(HeaderComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should set the title to "ShoppingCart"', () => {
    expect(component.title).toBe('ShoppingCart');
  });

  it('should create an instance of StoreFacade', () => {
    const storeService = TestBed.inject(StoreFacade);
    expect(storeService).toBeTruthy();
  });
});
