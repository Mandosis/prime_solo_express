var random = require('./random');
var currency = require('./currency');

var getMoney = function() {
  return currency(random(100,1000000));
}

var balance = function() {
  return 'Account balance: \n';
}

exports.money = getMoney;
exports.balance = balance;
