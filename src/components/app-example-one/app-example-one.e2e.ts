import { newE2EPage } from '@stencil/core/testing';

describe('app-example-one', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<app-example-one></app-example-one>');

    const element = await page.find('app-example-one');
    expect(element).toHaveClass('hydrated');
  });

  it('displays the p', async () => {
    const page = await newE2EPage();
    await page.setContent('<app-example-one></app-example-one>');

    const element = await page.find('app-example-one >>> div');
    expect(element.textContent).toContain('Hi! This is the first and most simple example.');
  });
});
