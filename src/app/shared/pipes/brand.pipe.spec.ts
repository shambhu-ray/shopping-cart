import { Product } from '../models/product.model';
import { BrandPipe } from './brand.pipe';

describe('BrandPipe', () => {
  let pipe: BrandPipe;

  beforeEach(() => {
    pipe = new BrandPipe();
  });

  it('should create an instance', () => {
    expect(pipe).toBeTruthy();
  });

  it('should filter products by brand', () => {
    const products: Product[] = [
      { id: 1, brand: 'Brand1' },
      { id: 2, brand: 'Brand2' },
      { id: 3, brand: 'Brand1' },
      { id: 4, brand: 'Brand3' },
    ] as Product[];

    const brandName = 'Brand1';
    const filteredProducts = pipe.transform(products, brandName);

    expect(filteredProducts.length).toBe(2);
    expect(filteredProducts[0]).toEqual(products[0]);
    expect(filteredProducts[1]).toEqual(products[2]);
  });

  it('should return all products if brand is falsy', () => {
    const products: Product[] = [
      { id: 1, brand: 'Brand1' },
      { id: 2, brand: 'Brand2' },
      { id: 3, brand: 'Brand1' },
    ] as Product[];

    const brandName = null;
    const filteredProducts = pipe.transform(products, brandName);

    expect(filteredProducts.length).toBe(3);
    expect(filteredProducts).toEqual(products);
  });
});
