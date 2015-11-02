var assert = require('assert');

describe('page title', function() {

  it('should contain the words "College Scorecard"', function*() {

    yield browser.url('https://collegescorecard.ed.gov/');
    var title = yield browser.getTitle();
    assert.ok(title.match(/College Scorecard/), title);

  });

});
