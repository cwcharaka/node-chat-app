const expect = require('expect');
const {Users} = require('./users')

describe('Users', () => {
  var users;
  beforeEach(() => {
    users = new Users();
    users.users = [{
      id: '1',
      name: 'Charaka',
      room: 'Node Course'
    },{
      id: '2',
      name: 'Madhawa',
      room: 'React Course'
    },{
      id: '3',
      name: 'Anu',
      room: 'Node Course'
    }];
  });
  it('Should add new user', () => {
    // var users = new Users();
    user = {
      id: '123',
      name: 'Charaka',
      room: 'The office fans'
    };
    var resUser = users.addUser(user.id, user.name, user.room);
    expect(users.users).toInclude(user);
    expect(users.users.length).toBe(4);
  });

  it('Should return names for node course', () => {
    var userList = users.getUserList('Node Course');
    expect(userList).toEqual(['Charaka','Anu'])
  });

  it('Should return names for react course', () => {
    var userList = users.getUserList('React Course');
    expect(userList).toEqual(['Madhawa'])
  });

  it('Should find user', () => {
    var userId = '1';
    var user = users.getUser(userId);
    expect(user.id).toBe(userId);
  });

  it('Should not find user', () => {
    var userId = '99';
    var user = users.getUser(userId);
    expect(user).toNotExist();
  });

  it('Should remove a user', () => {
    var userId = '1';
    var user = users.removeUser(userId);
    expect(user.id).toBe(userId);
    expect(users.users.length).toBe(2);
  });

  it('Should not remove user', () => {
    var userId = '99';
    var user = users.removeUser(userId);
    expect(user).toNotExist();
    expect(users.users.length).toBe(3);
  })
});
