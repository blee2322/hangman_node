//This will hold the game logic, including our array of words.
var Word = require("./word.js");
var getMovie = function() {

 var movieArray = ["Up", "Gladiator", "Alien", "Interstellar", "Flatliners", "Scream", "Prometheus", "Inception", "Brave", "Cars", "Unbreakable", "Split", "Fargo", "Amadeus", "Goodfellas", "Fearless", "Unforgiven", "Casino", "Heat", "Crash", "Scarface", "Platoon", "Memento", "Chinatown", "Traffic", "Casablanca", "Jaws", "Seven", "Misery", "It", "Halloween", "Babel", "JFK", "Australia", "Hancock", "Titanic", "Ratatouille", "Aladdin", "Cinderella", "Dracula", "Moana", "Tangled", "Skyfall", "Lincoln", "Looper", "Argo", "Flight", "Savages", "Gone", "Contraband"];

 var randomMovie = movieArray[Math.floor.(Math.random() * movieArray.length)];

 var movieTitle = new Title(randomMovie);

 return word;

}

//A constructor function that will choose a random word.
