import { RoutingAngularExamplePage } from './app.po';

describe('routing-angular-example App', () => {
  let page: RoutingAngularExamplePage;

  beforeEach(() => {
    page = new RoutingAngularExamplePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
