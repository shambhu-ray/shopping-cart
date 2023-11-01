import { HttpClient } from '@angular/common/http';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { Product } from '../shared/models/product.model';
import { DataService } from './data.service';

describe('DataService', () => {
  let httpClient: HttpClient;
  let httpTestingController: HttpTestingController;
  let dataService: DataService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [DataService]
    });

    // Inject the HttpClient, HttpTestingController, and DataService
    httpClient = TestBed.inject(HttpClient);
    httpTestingController = TestBed.inject(HttpTestingController);
    dataService = TestBed.inject(DataService);
  });

  it('should be created', () => {
    expect(dataService).toBeTruthy();
  });

  it('should return an array of products', () => {
    const mockProducts: Product[] = [
      {
        id: 1
      },
      {
        id: 2
      },
    ] as Product[];

    dataService.getProducts().subscribe((products: Product[]) => {
      expect(products).toEqual(mockProducts);
    });

    const req = httpTestingController.expectOne(`${dataService.BASE_URL}product-data.json`);
    expect(req.request.method).toEqual('GET');
    req.flush(mockProducts);
  });

  afterEach(() => {
    httpTestingController.verify();
  });
});
