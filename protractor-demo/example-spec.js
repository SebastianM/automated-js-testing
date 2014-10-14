describe('Home page', function() {

  beforeEach(function() {
    browser.ignoreSynchronization = true;
    browser.get('/');

  })

  it('should show initial short description', function() {
    expect($('#short-description').getText()).toEqual('Kurzbeschreibung');
    expect($('#details').isDisplayed()).toBe(false);
  });

  it('should show advanced details after click', function() {
    $('#details-button').click();
    expect($('#details').isDisplayed()).toBe(true);
    expect($('#details').getText()).toEqual('Details');
  });

});