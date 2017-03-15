import { HohPage } from './app.po';

describe('hoh App', () => {
  let page: HohPage;

  beforeEach(() => {
    page = new HohPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
