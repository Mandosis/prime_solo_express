var express = require('express');
var bank = require('./modules/bank.js');

var app = express();
var port = 3000;

app.get('/balance', function(req, res) {
  console.log("Request made for balance.");
  res.send(bank.balance() + bank.money());
});

// Catch all
app.use(express.static('public'));

app.listen(port, function() {
  console.log("Server is running on port", port);
});
