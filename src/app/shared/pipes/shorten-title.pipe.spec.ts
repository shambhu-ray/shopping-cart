import { ShortenTitlePipe } from './shorten-title.pipe';

describe('ShortenTitlePipe', () => {
  let pipe: ShortenTitlePipe;

  beforeEach(() => {
    pipe = new ShortenTitlePipe();
  });

  it('should create an instance', () => {
    expect(pipe).toBeTruthy();
  });

  it('should transform a title by splitting it at the first occurrence of " ("', () => {
    const inputTitle = 'Example Title (Extra Info)';
    const expectedOutput = 'Example Title';

    const transformedTitle = pipe.transform(inputTitle);

    expect(transformedTitle).toEqual(expectedOutput);
  });

  it('should return the original title if it does not contain " ("', () => {
    const inputTitle = 'Title Without Parentheses';

    const transformedTitle = pipe.transform(inputTitle);

    expect(transformedTitle).toEqual(inputTitle);
  });
});
