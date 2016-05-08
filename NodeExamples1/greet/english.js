/*
In case of JSON file , the require function will simply return the JSON object associated with that JSON file
 */
var greetings = require("./greetings.json");

var greet = function() {
    console.log(greetings.en);
};

module.exports = greet;