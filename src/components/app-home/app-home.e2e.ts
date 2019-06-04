import { newE2EPage } from '@stencil/core/testing';

describe('app-home', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<app-home></app-home>');

    const element = await page.find('app-home');
    expect(element).toHaveClass('hydrated');
  });

  it('contains a "Example 1" button', async () => {
    const page = await newE2EPage();
    await page.setContent('<app-home></app-home>');

    const element = await page.find('app-home >>> button');
    expect(element.textContent).toEqual('Example 1');
  });
});
