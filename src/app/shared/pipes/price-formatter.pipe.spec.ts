import { PriceFormatterPipe } from './price-formatter.pipe';

describe('PriceFormatterPipe', () => {
  let pipe: PriceFormatterPipe;

  beforeEach(() => {
    pipe = new PriceFormatterPipe();
  });

  it('should create an instance', () => {
    expect(pipe).toBeTruthy();
  });

  it('should transform a number into a formatted price string', () => {
    const price = 1234567.89;
    const formattedPrice = pipe.transform(price);
    expect(formattedPrice).toBe('1,234,567.89');
  });

  it('should transform a zero into a formatted price string', () => {
    const price = 0;
    const formattedPrice = pipe.transform(price);
    expect(formattedPrice).toBe('0.00');
  });
});
