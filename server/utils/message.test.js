const expect = require('expect');

var {generateMessage} = require('./message')

describe('generateMessage', () => {
  it('Should generate correct message object', () => {
    const from = 'test user';
    const text = 'Hi from test user'
    var res = generateMessage(from, text);
    expect(res).toInclude({from, text})
    expect(res.createdAt).toBeA('number')
  });
})
