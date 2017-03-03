const moment = require('moment');
// Jan 1st 1970 00:00:10

// var date = new Date()
// var months = ['Jan', 'Feb', 'March']
// console.log(months[date.getMonth()]);

var someTimestamp = moment().valueOf()

console.log(someTimestamp);

var createdAt = 1234
var date = moment(createdAt);
//date.add(10000, 'year').subtract(10000, 'days')
console.log(date.format('MMM Do, YYYY'));
