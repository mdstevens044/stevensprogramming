import { StevensProgrammingPage } from './app.po';

describe('stevens-programming App', () => {
  let page: StevensProgrammingPage;

  beforeEach(() => {
    page = new StevensProgrammingPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect<any>(page.getParagraphText()).toEqual('app works!');
  });
});
