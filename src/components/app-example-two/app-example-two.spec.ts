import { AppExampleTwo } from './app-example-two';

describe('app-example-two', () => {
  it('builds', () => {
    expect(new AppExampleTwo()).toBeTruthy();
  });

  describe('title', () => {
    it('returns the title', () => {
      const component = new AppExampleTwo();
      expect(component.title()).toEqual('Example 2');
    });
  });
});
