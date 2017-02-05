import { ArmoniaPage } from './app.po';

describe('armonia App', function() {
  let page: ArmoniaPage;

  beforeEach(() => {
    page = new ArmoniaPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
