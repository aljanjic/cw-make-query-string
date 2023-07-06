const toQueryString = require('./toQueryString');

describe('toQueryString', () => {
  it("{ foo: 1, bar: 2 } should return 'foo=1&bar=2'", () => {
    expect(toQueryString({ foo: 1, bar: 2 })).toBe('foo=1&bar=2');
  });

  it("{foo: [ 1, 3 ], bar: [ 2, 4 ]} should return 'foo=1&foo=3&bar=2&bar=4'", () => {
    expect(toQueryString({foo: [ 1, 3 ], bar: [ 2, 4 ]})).toBe('foo=1&foo=3&bar=2&bar=4');
  });

  it("{ a: 'Z', b: 'Y', c: 'X', d: 'W', e: 'V', f: 'U', g: 'T' } should return 'a=Z&b=Y&c=X&d=W&e=V&f=U&g=T'", () => {
    expect(toQueryString({ a: 'Z', b: 'Y', c: 'X', d: 'W', e: 'V', f: 'U', g: 'T' })).toBe('a=Z&b=Y&c=X&d=W&e=V&f=U&g=T');
  });
});
