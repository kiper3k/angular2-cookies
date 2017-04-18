import { Ng2CookiesTestPage } from './app.po';

describe('ng2-cookies-test App', () => {
  let page: Ng2CookiesTestPage;

  beforeEach(() => {
    page = new Ng2CookiesTestPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
