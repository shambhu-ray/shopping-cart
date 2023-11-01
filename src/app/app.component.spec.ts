import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { MaterialModule } from './material.module';
import { StoreFacade } from './store/store.facade';

describe('AppComponent', () => {
  let fixture: ComponentFixture<AppComponent>;
  let component: AppComponent;
  let storeFacade: jasmine.SpyObj<StoreFacade>;

  beforeEach(() => {
    const storeFacadeSpy = jasmine.createSpyObj('StoreFacade', ['loadProducts', 'clearBrandFilter']);

    TestBed.configureTestingModule({
      declarations: [AppComponent, HeaderComponent],
      imports: [RouterTestingModule, MaterialModule],
      providers: [{ provide: StoreFacade, useValue: storeFacadeSpy }],
    });

    fixture = TestBed.createComponent(AppComponent);
    component = fixture.componentInstance;
    storeFacade = TestBed.inject(StoreFacade) as jasmine.SpyObj<StoreFacade>;
  });

  it('should create the app', () => {
    expect(component).toBeTruthy();
  });

  it('should call loadProducts and clearBrandFilter on ngOnInit', () => {
    component.ngOnInit();
    expect(storeFacade.loadProducts).toHaveBeenCalled();
    expect(storeFacade.clearBrandFilter).toHaveBeenCalled();
  });
});
