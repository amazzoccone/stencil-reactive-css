import { newE2EPage } from '@stencil/core/testing';

describe('app-profile', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<app-example-simple></app-example-simple>');

    const element = await page.find('app-example-simple');
    expect(element).toHaveClass('hydrated');
  });

  it('displays the p', async () => {
    const page = await newE2EPage({ url: '/example/simple' });
    await page.setContent('<app-example-simple></app-example-simple>');

    const element = await page.find('app-example-simple >>> div');
    expect(element.textContent).toContain('Hi! This is the first and most simple example.');
  });
});
