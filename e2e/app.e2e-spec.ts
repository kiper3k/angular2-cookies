import { Angular2CookiesPage } from './app.po';

describe('angular2-cookies App', () => {
  let page: Angular2CookiesPage;

  beforeEach(() => {
    page = new Angular2CookiesPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
