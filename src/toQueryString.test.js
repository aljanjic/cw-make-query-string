const toQueryString = require('./toQueryString');

describe('toQueryString', () => {
  it('should return hello', () => {
    expect(toQueryString()).toBe('hello');
  });
});
