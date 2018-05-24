
//blank array to hold the animal names
var Animals = [];

// generates the animal buttons
function animalButtons() {

    $("#buttons-view").empty();

    for (var i = 0; i < Animals.length; i++) {

        var anm = $("<button>");
        anm.addClass("animal");
        anm.attr("data-name", Animals[i]);
        anm.text(Animals[i]);
        $("#buttons-view").append(anm);
    }
}

// when the submit button is clicked this will generate the animal buttons
$("#submitButton").on("click", function (event) {

    event.preventDefault();
    var animal = $("#animalinput").val().trim();
    console.log(animal);
    Animals.push(animal);
    animalButtons();

});

//clear the gifys and buttons
$("#clearButton").on("click", function(event){
    event.preventDefault();
    $("#buttons-view").empty();
    $(".item").empty();
    Animals=[];
    $("#animalinput").val('');
})

var gifyData;
var queryURL;

$("body").on("click",".animal", function(event) {
    event.preventDefault();
    gifyData = $(this).attr("data-name");
    console.log(gifyData);
    queryURL = "https://api.giphy.com/v1/gifs/search?q=" +
      gifyData + "&api_key=dc6zaTOxFJmzC&limit=1";
    console.log(queryURL);
   
    $.ajax({
        url: queryURL,
        method: "GET"
    })
      .then(function(response) {
        var results = response.data;
        for (var i = 0; i < results.length; i++) {
          var gifDiv = $("<div class='item'>");
          var rating = results[i].rating;
          var p = $("<p>").text("Rating: " + rating);
          var animalImage = $("<img>");
          animalImage.attr("src", results[i].images.fixed_height.url);
          gifDiv.prepend(p);
          gifDiv.prepend(animalImage);
          $("#gify").prepend(gifDiv);
        }
      });
});





animalButtons();