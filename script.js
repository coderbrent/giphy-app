var APIkey = "nq5lkeEwDVExNdGEubv2uPOutyxK4U19";
var searchLimiter = "5";
var userRating = "R";

var topics = ["nintendo", "sega", "atari", "turbografix", "jaguar64", "neo geo"];
var newBtn;


for(i=0; i < topics.length; i++) {
  newBtn = $("<button>").addClass("m-2 newBtn");
  newBtn.attr("data-name", topics[i]);
  $(newBtn).prependTo("#button-feed");
  $(newBtn).text(topics[i]);
}

$(document.body).on("click", ".newBtn", function() {
  searchQuery = $(this).attr("data-name");
  userRating = $(this).attr("")
  var queryURL = "https://api.giphy.com/v1/gifs/search?q=" + searchQuery + "&api_key=" + APIkey + "&limit=" + searchLimiter + "&rating=" + userRating;
  
  $.ajax({
    url: queryURL,
    method: "GET"
  }).then(function(data) { 
    console.log("success got data", data);
    var card = $("<img>");
    let gif = data.data[0].images.original_mp4.mp4;
    console.log(gif);
    $(card).attr("src", gif);
    $(card).appendTo("#gif-feed");
  });

});









