var APIkey = "nq5lkeEwDVExNdGEubv2uPOutyxK4U19";
var searchLimiter = "5";
var userRating = "r";

var topics = ["zelda", "mario", "sonic", "ryu", "mega-man", "samus"];
var newBtn;


for(i=0; i < topics.length; i++) {
  newBtn = $("<button>").addClass("m-2 newBtn");
  newBtn.attr("data-name", topics[i]);
  $(newBtn).prependTo("#button-feed");
  $(newBtn).text(topics[i]);
}

$(document.body).on("click", "#g", function() {
  userRating = $(this).val();
})

$(document.body).on("click", ".newBtn", function() {
  $("#gif-feed").empty();
  searchQuery = $(this).attr("data-name");
  var queryURL = "https://api.giphy.com/v1/gifs/search?q=" + searchQuery + "&api_key=" + APIkey + "&limit=" + searchLimiter + "&rating=" + userRating;
  
  $.ajax({
    url: queryURL,
    method: "GET"
  }).then(function(data) {
    for(j=0; j < data.data.length; j++) {
    console.log(data);
    var card = $("<img>").addClass("w-25 h-25 shadow-sm m-2 gif").attr("data-state", "still");
    var gifURL = data.data[j].images.original.url;
    $(card).attr("src", gifURL);
    $(card).appendTo("#gif-feed");
    }
      }
    )
  });









