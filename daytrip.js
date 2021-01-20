"use strict";

//As a developer, I want to make good, consistent commits (on github)

//As a user, I want a destination to be randomly selected for my day trip. (Make function that pulls destinations randomly from array)

function destination() {

    let locationArray = ["Chicago", "Indianapolis", "Cincinatti", "South Bend", "St. Louis"];
    let randomLocation = locationArray[Math.floor(Math.random()*locationArray.length)];
    return randomLocation;
}

//As a user, I want a restaurant to be randomly selected for my day trip. (Make function that pulls restaurants randomly from array)

function restaurant() {

    let restaurantArray = ["KFC", "Long John Silver's", "Jack In The Box", "Checkers", "Hardee's"];
    let randomRestaurant = restaurantArray[Math.floor(Math.random()*restaurantArray.length)];
    return randomRestaurant;
}


//As a user, I want a mode of transportation to be randomly selected for my day trip. (Make function that pulls transportation randomly from array)

function transportation() {

    let transporationArray = ["Train", "Bus", "Car"];
    let randomTransportation = transporationArray[Math.floor(Math.random()*transporationArray.length)];
    return randomTransportation;
}

//As a user, I want a form of entertainment to be randomly selected for my day trip. (Make function that pulls entertainment randomly from array)

function entertainment() {

    let entertainmentArray = ["Concert", "Movie", "Art Gallery", "Museum", "Sports Event"];
    let randomEntertainment = entertainmentArray[Math.floor(Math.random()*entertainmentArray.length)];
    return randomEntertainment;
}


let dayTripArray = [destination(), restaurant(), transportation(), entertainment()];
let tripDestination = dayTripArray[0];
let tripRestaurant = dayTripArray[1];
let tripTransporation = dayTripArray[2];
let tripEntertainment = dayTripArray[3];

function reroll() {
    tripDestination = destination();
    tripRestaurant = restaurant();
    tripTransporation = transportation();
    tripEntertainment = entertainment();
    return tripDestination, tripRestaurant, tripTransporation, tripEntertainment;
}

function userTrip(){
    alert("Your randomly generated day trip will be in " + tripDestination + ", you'll eat at " + tripRestaurant + ", you'll arrive by " + tripTransporation + ", and you will go to a " + tripEntertainment + ".");
}

function userValue() {
   let choice = parseInt(prompt("Please enter 0 if you are happy with your trip! Enter 1 to change destination, 2 for restaurant, 3 for transportation, or 4 for entertainment. Please press 5 for an entire new trip!"));
    return choice
}

userTrip();

let userChoice = true

while (userChoice) {
    let userInput = userValue();
    
    if(userInput === 1) {
        tripDestination = destination();
        userTrip();
    }
    else if(userInput === 2) {
        tripRestaurant = restaurant();
        userTrip();
    }
    else if(userInput === 3) {
        tripTransporation = transportation();
        userTrip();
    }
    else if(userInput === 4) {
        tripEntertainment = entertainment();
        userTrip();
    }
    else if (userInput === 5) {
        reroll();
        userTrip();
    }
    else if (userInput === 0) {
        alert("Your randomly generated day trip is all set!");
        console.log(tripDestination, " ", tripRestaurant, " ", tripTransporation, " ", tripEntertainment);
        userChoice = false;
    }
    else {
        console.log("Invalid choice.");
    }

}
//As a user, I want to be able to randomly re-select a destination, restaurant, mode of transportation, and/or form of entertainment if I don't like one or more of those things.
//(Have prompt trigger somehow a way to restart specific function)



//As a user, I want to be able to confirm that my day trip is "complete" one I like all of the random selections. (Have prompt trigger user is complete)

//As a user, I want to display my completed trip in the console. (Display completed trip into the console)

//As a developer, I want all of my functions to have a Single Responsibility. Remember, each function should do one thing!

//Research: How to generate a random number in JavaScript?