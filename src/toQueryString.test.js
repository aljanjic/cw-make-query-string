const toQueryString = require('./toQueryString');

describe('toQueryString', () => {
  it("{ foo: 1, bar: 2 } should return 'foo=1&bar=2'", () => {
    expect(toQueryString({ foo: 1, bar: 2 })).toBe('foo=1&bar=2');
  });
});
