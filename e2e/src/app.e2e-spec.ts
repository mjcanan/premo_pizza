<<<<<<< HEAD
import { browser, logging } from 'protractor';
import { AppPage } from './app.po';
=======
import { AppPage } from './app.po';
import { browser, logging } from 'protractor';
>>>>>>> 8f85b4279b6e5a1bfb0a32578b2f8b88b2c4a91e

describe('workspace-project App', () => {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
  });

  it('should display welcome message', async () => {
    await page.navigateTo();
<<<<<<< HEAD
    expect(await page.getTitleText()).toEqual('premopizza app is running!');
=======
    expect(await page.getTitleText()).toEqual('premo-pizza app is running!');
>>>>>>> 8f85b4279b6e5a1bfb0a32578b2f8b88b2c4a91e
  });

  afterEach(async () => {
    // Assert that there are no errors emitted from the browser
    const logs = await browser.manage().logs().get(logging.Type.BROWSER);
    expect(logs).not.toContain(jasmine.objectContaining({
      level: logging.Level.SEVERE,
    } as logging.Entry));
  });
});
