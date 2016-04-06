var express = require('express');
var bank = require('./modules/bank.js');
var bodyParser = require('body-parser');

var app = express();
var port = 3000;
var min = 100;
var max = 1000000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.get('/balance', function(req, res) {
  console.log("Request made for balance.\n" + bank.balance() + bank.money(min, max) + "\n");
  res.send(bank.balance() + bank.money(min, max));
});

app.post('/range', function(req, res) {
  console.log("Request to change range", req.body)
  min = parseInt(req.body.min) || min;
  max = parseInt(req.body.max) || max;
  res.sendStatus(200);
});

// Catch all
app.use(express.static('public'));

app.listen(port, function() {
  console.log("Server is running on port", port);
});
