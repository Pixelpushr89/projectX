import { ProjectXAppPage } from './app.po';

describe('project-x-app App', function() {
  let page: ProjectXAppPage;

  beforeEach(() => {
    page = new ProjectXAppPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
