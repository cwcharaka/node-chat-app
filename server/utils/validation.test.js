const expect = require('expect');

const {isRealString} = require('./validation');

describe('isRealString', () => {
  it('Should reject non-string values', () => {
    var result = isRealString(1234)
    expect(result).toBe(false)
  });
  it('Should reject string with only spaces', () => {
    var result = isRealString('   ');
    expect(result).toBe(false)
  });
  it('Should allow strings with non-space charactors', () => {
    var result = isRealString(' Charak wije ');
    expect(result).toBe(true)
  })
});
