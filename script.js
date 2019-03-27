var APIkey = "nq5lkeEwDVExNdGEubv2uPOutyxK4U19";
var searchQuery = "hobo";
var searchLimiter = "5";
var userRating = "R";
var queryURL = "https://api.giphy.com/v1/gifs/search?q="+ searchQuery + "&api_key=" + APIkey + "&limit=" + searchLimiter + "&rating=" + userRating;
var topics = ["nes games", "snes games", "sega games", "atari games", "turbografix 16 games", "jaguar 64 games", "neo geo games"];


$("#generate").on("click", function() {
  for(i=0; i < topics.length; i++) {
    var newBtn = $("<button>").addClass("m-2");
    newBtn.attr("data-name", topics[i]);
    $(newBtn).prependTo("#gif-feed");
    $(newBtn).text(topics[i]);
  }

  $.ajax({
    url: queryURL,
    method: "GET"
  }).then(function(data) { 
    console.log("success got data", data);
    for(i=0; i < data.length; i++) {
      console.log([i]);
    }
  });

})








