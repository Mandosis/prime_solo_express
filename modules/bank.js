var random = require('./random');
var currency = require('./currency');

var getMoney = function(min, max) {
  return currency(random(min,max));
}

var balance = function() {
  return 'Account balance: \n';
}

exports.money = getMoney;
exports.balance = balance;
