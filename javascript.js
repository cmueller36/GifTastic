
//blank array to hold the animal names
var Animals = [];

// Generic function for capturing the movie name from the data-attribute
function alertAnimalName() {
    var animalName = $(this).attr("data-name");

    alert(animalName);
}

// Function for displaying movie data
function renderButtons() {

    // Deleting the movies prior to adding new movies
    // (this is necessary otherwise we will have repeat buttons)
    $("#buttons-view").empty();

    // Looping through the array of movies
    for (var i = 0; i < Animals.length; i++) {

        // Then dynamicaly generating buttons for each movie in the array
        // This code $("<button>") is all jQuery needs to create the start and end tag. (<button></button>)
        var a = $("<button>");
        // Adding a class of movie to our button
        a.addClass("movie");
        // Adding a data-attribute
        a.attr("data-name", Animals[i]);
        // Providing the initial button text
        a.text(Animals[i]);
        // Adding the button to the HTML
        $("#buttons-view").append(a);
    }
}

// This function handles events where one button is clicked
$("#submitButton").on("click", function (event) {
    // Preventing the buttons default behavior when clicked (which is submitting a form)
    event.preventDefault();
    // This line grabs the input from the textbox
    var animal = $("#animalinput").val().trim();

    console.log(animal);

    // Adding the movie from the textbox to our array
    Animals.push(animal);

    // Calling renderButtons which handles the processing of our movie array
    renderButtons();

});

// Function for displaying the movie info
// We're adding a click event listener to all elements with the class "movie"
// We're adding the event listener to the document because it will work for dynamically generated elements
// $(".movies").on("click") will only add listeners to elements that are on the page at that time
$(document).on("click", ".movie", alertAnimalName);

// Calling the renderButtons function to display the intial buttons
renderButtons();