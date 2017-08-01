<<<<<<< HEAD
import { TestAppPage } from './app.po';

describe('test-app App', () => {
  let page: TestAppPage;

  beforeEach(() => {
    page = new TestAppPage();
=======
import { TaskCuratorPage } from './app.po';

describe('task-curator App', () => {
  let page: TaskCuratorPage;

  beforeEach(() => {
    page = new TaskCuratorPage();
>>>>>>> 4c043cd088cbae25108d4d0ef04a73acab2f8093
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
