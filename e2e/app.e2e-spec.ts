import { TaskCuratorPage } from './app.po';

describe('task-curator App', () => {
  let page: TaskCuratorPage;

  beforeEach(() => {
    page = new TaskCuratorPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
