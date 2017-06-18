import { AngularSpaBasicPage } from './app.po';

describe('angular-spa-basic App', () => {
  let page: AngularSpaBasicPage;

  beforeEach(() => {
    page = new AngularSpaBasicPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
