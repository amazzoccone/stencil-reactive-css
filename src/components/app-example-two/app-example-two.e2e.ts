import { newE2EPage } from '@stencil/core/testing';

describe('app-example-two', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<app-example-two></app-example-two>');

    const element = await page.find('app-example-two');
    expect(element).toHaveClass('hydrated');
  });

  it('displays the p', async () => {
    const page = await newE2EPage({ url: '/example/two' });
    await page.setContent('<app-example-two></app-example-two>');

    const element = await page.find('app-example-two >>> div');
    expect(element.textContent).toContain('Hi! This is the second example.');
  });
});
