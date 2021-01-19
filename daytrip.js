"use strict";

//As a developer, I want to make good, consistent commits (on github)

//As a user, I want a destination to be randomly selected for my day trip. (Make function that pulls destinations randomly from array)

function destination() {

    let locationArray = ["Chicago", "Indianapolis", "Cincinatti", "South Bend", "St. Louis"];
    let randomLoc = locationArray[Math.floor(Math.random()*locationArray.length)];
    console.log(randomLoc);
}

destination();

//As a user, I want a restaurant to be randomly selected for my day trip. (Make function that pulls restaurants randomly from array)

function restaurant() {

    let restaurantArray = ["KFC", "Long John Silver's", "Jack In The Box", "Checkers", "Hardee's"];
    let randomRest = restaurantArray[Math.floor(Math.random()*restaurantArray.length)];
    console.log(randomRest);
}

restaurant();

//As a user, I want a mode of transportation to be randomly selected for my day trip. (Make function that pulls transportation randomly from array)

function transportation() {

    let transporationArray = ["Train", "Bus", "Car"];
    let randomTrans = transporationArray[Math.floor(Math.random()*transporationArray.length)];
    console.log(randomTrans);
}

transportation();

//As a user, I want a form of entertainment to be randomly selected for my day trip. (Make function that pulls entertainment randomly from array)

function entertainment() {

    let entertainmentArray = ["Concert", "Movie", "Art Gallery", "Museum", "Sports Event"];
    let randomEnt = entertainmentArray[Math.floor(Math.random()*entertainmentArray.length)];
    console.log(randomEnt);
}

entertainment();

//As a user, I want to be able to randomly re-select a destination, restaurant, mode of transportation, and/or form of entertainment if I don't like one or more of those things.
//(Have prompt trigger somehow a way to restart specific function)

//As a user, I want to be able to confirm that my day trip is "complete" one I like all of the random selections. (Have prompt trigger user is complete)

//As a user, I want to display my completed trip in the console. (Display completed trip into the console)

//As a developer, I want all of my functions to have a Single Responsibility. Remember, each function should do one thing!

//Research: How to generate a random number in JavaScript?