import { newE2EPage } from '@stencil/core/testing';

describe('app-example-three', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<app-example-three></app-example-three>');

    const element = await page.find('app-example-three');
    expect(element).toHaveClass('hydrated');
  });

  it('displays the p', async () => {
    const page = await newE2EPage();
    await page.setContent('<app-example-three></app-example-three>');

    const element = await page.find('app-example-three >>> div');
    expect(element.textContent).toContain('Hi! This is the third and last example.');
  });
});
