import { AppExampleOne } from './app-example-one';

describe('app-example-one', () => {
  it('builds', () => {
    expect(new AppExampleOne()).toBeTruthy();
  });

  describe('title', () => {
    it('returns the title', () => {
      const component = new AppExampleOne();
      expect(component.title()).toEqual('Example 1');
    });
  });
});
