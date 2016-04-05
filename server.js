var express = require('express');
var bank = require('./modules/bank.js');

var app = express();
var port = 3000;

// Catch all
app.use(express.static('public'));

app.listen(port, function() {
  console.log("Server is running on port", port);
});
