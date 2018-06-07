import { CurrencyCatalogPage } from './app.po';

describe('currency-catalog App', () => {
  let page: CurrencyCatalogPage;

  beforeEach(() => {
    page = new CurrencyCatalogPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
