$(function() {
  $('.getBalance').click(function() {
    getBalance();
  });
});

function getBalance() {
  $.get("http://localhost:3000/balance").done(function(response) {
    $("body").append("<p>" + response + "</p>");
  }).fail();
}
