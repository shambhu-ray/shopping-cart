import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MatSelectionListChange } from '@angular/material/list';
import { StoreFacade } from 'src/app/store/store.facade';
import { MaterialModule } from '../../material.module';
import { BrandFilterComponent } from './brand-filter.component';

describe('BrandFilterComponent', () => {
  let component: BrandFilterComponent;
  let fixture: ComponentFixture<BrandFilterComponent>;

  // Mock StoreFacade
  const storeFacadeStub = {
    products$: jasmine.createSpy().and.returnValues([]),
    addBrandToFilter: jasmine.createSpy(),
    removeBrandFromFilter: jasmine.createSpy()
  };

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BrandFilterComponent],
      imports: [MaterialModule],
      providers: [{ provide: StoreFacade, useValue: storeFacadeStub }]
    });

    fixture = TestBed.createComponent(BrandFilterComponent);
    component = fixture.componentInstance;
  });

  it('should create the component', () => {
    expect(component).toBeTruthy();
  });

  // Write more test cases for your component's methods and behavior.
  it('should call addBrandToFilter when a brand is selected', () => {
    const brandName = 'BrandName';
    const event = {
      options: [{ value: brandName, selected: true }] as any
    } as MatSelectionListChange;

    component.brandSelectBoxChangeEvent(event);

    expect(storeFacadeStub.addBrandToFilter).toHaveBeenCalledWith(brandName);
  });

  it('should call removeBrandFromFilter when a brand is deselected', () => {
    const brandName = 'BrandName';
    const event = {
      options: [{ value: brandName, selected: false }] as any
    } as MatSelectionListChange;

    component.brandSelectBoxChangeEvent(event);

    expect(storeFacadeStub.removeBrandFromFilter).toHaveBeenCalledWith(brandName);
  });

  // Add more test cases to cover your component's logic.
});
