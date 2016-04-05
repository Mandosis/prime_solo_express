$(function() {
  $('.getBalance').click(function() {
    getBalance();
  });

  $('.setRange').click(function() {
    var min = parseInt($(".min").val()) || 100;
    var max = parseInt($(".max").val()) || 1000000;
    setRange(min, max);
  });
});

function getBalance() {
  $.get("http://localhost:3000/balance").done(function(response) {
    console.log("Getting balance...");
    $("body").append("<p>" + response + "</p>");
  }).fail(function() {
    console.log("Getting balance failed");
  });
}

function setRange(min, max) {
  $.post("http://localhost:3000/range", {min: min, max: max}).done(function() {
    console.log("Range posted!");
  }).fail();
}
