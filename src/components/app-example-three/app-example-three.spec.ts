import { AppExampleThree } from './app-example-three';

describe('app-example-three', () => {
  it('builds', () => {
    expect(new AppExampleThree()).toBeTruthy();
  });

  describe('title', () => {
    it('returns the title', () => {
      const component = new AppExampleThree();
      expect(component.title()).toEqual('Example 3');
    });
  });
});
