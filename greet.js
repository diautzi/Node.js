// function statement
function greet() {
  console.log("hi");
}

// functions are first class meaning that they can be passed around as variables]
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
