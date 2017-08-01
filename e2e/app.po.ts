import { browser, by, element } from 'protractor';

<<<<<<< HEAD
export class TestAppPage {
=======
export class TaskCuratorPage {
>>>>>>> 4c043cd088cbae25108d4d0ef04a73acab2f8093
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('app-root h1')).getText();
  }
}
