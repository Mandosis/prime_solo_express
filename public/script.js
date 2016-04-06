$(function() {

  // Listen for balance button
  $(".getBalance").click(function() {
    var min = parseInt($(".min").val()) || 100;
    var max = parseInt($(".max").val()) || 1000000;
    setRange(min, max);
    getBalance();
  });
});

// Get the random balance from the server
function getBalance() {
  $.get("http://localhost:3000/balance").done(function(response) {
    console.log("Getting balance...");
    $("main").append("<section><p>" + response + "</p></section>");
    $("section").last().hide().fadeIn("slow");
  }).fail(function() {
    console.log("Getting balance failed");
  });
}

// Set the minimum and maximum range
function setRange(min, max) {
  $.post("http://localhost:3000/range", {min: min, max: max}).done(function() {
    console.log("Setting range...");
  }).fail(function(){
    console.log("Setting range failed");
  });
}
