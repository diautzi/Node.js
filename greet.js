// function statement
function greet() {
  console.log("hi");
}

// // functions are first class meaning that they can be passed around as variables]
function logGreeting(fn) {
  fn();
}

logGreeting(greet);

// function expression
let greetMe = function () {
  console.log("Hi Diana");
};

greetMe();
logGreeting(greetMe);

let person = {
  firstname: "Diana",
  lastname: "Utan",
  greet: function () {
    console.log("Hello, " + this.firstname + " " + this.lastname);
  },
};

person.greet();

// exporting only needed functions from diferent modules
module.exports = greet;
