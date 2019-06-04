import { AppExampleSimple } from './app-example-simple';

describe('app-example-simple', () => {
  it('builds', () => {
    expect(new AppExampleSimple()).toBeTruthy();
  });

  describe('title', () => {
    it('returns the title', () => {
      const component = new AppExampleSimple();
      expect(component.title()).toEqual('Example 1');
    });
  });
});
