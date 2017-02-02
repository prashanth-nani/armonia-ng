import { Armonia2NgPage } from './app.po';

describe('armonia2-ng App', function() {
  let page: Armonia2NgPage;

  beforeEach(() => {
    page = new Armonia2NgPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
