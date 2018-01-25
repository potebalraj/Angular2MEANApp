import { Angular2MEANappPage } from './app.po';

describe('angular2-meanapp App', () => {
  let page: Angular2MEANappPage;

  beforeEach(() => {
    page = new Angular2MEANappPage();
  });

  it('should display welcome message', done => {
    page.navigateTo();
    page.getParagraphText()
      .then(msg => expect(msg).toEqual('Welcome to app!!'))
      .then(done, done.fail);
  });
});
