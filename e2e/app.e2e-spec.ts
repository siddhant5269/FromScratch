import { FromScratchPage } from './app.po';

describe('from-scratch App', () => {
  let page: FromScratchPage;

  beforeEach(() => {
    page = new FromScratchPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
