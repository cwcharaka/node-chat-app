const expect = require('expect');

var {generateMessage, generateLocationMessage} = require('./message')

describe('generateMessage', () => {
  it('Should generate correct message object', () => {
    const from = 'test user';
    const text = 'Hi from test user'
    var res = generateMessage(from, text);
    expect(res).toInclude({from, text})
    expect(res.createdAt).toBeA('number')
  });
});

describe('generateLocationMessage', () => {
  it('Should generate location object', () => {
    var lat = 1;
    var long = 1;
    var from = 'Admin'
    var url = `https://www.google.com.au/maps/?q=${lat},${long}`;
    var res = generateLocationMessage(from, lat, long)
    expect(res).toInclude({from, url})
    console.log(res.createdAt);
    expect(res.createdAt).toBeA('number')
  })
})
