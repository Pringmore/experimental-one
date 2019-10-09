import { HamburgerExperimentalPage } from './app.po';

describe('hamburger-experimental App', function() {
  let page: HamburgerExperimentalPage;

  beforeEach(() => {
    page = new HamburgerExperimentalPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
