const greet = require("./greet");

greet.english();
greet.romanian();

var greet2 = require("./greet/greet");
greet2.greet();
greet2.greeting = "Changed hello world";

var greet2b = require("./greet/greet");
greet2b.greet();

var Greet3 = require("./greet/greet2");
var greeter = new Greet3();
greeter.greet();

var greet4 = require("./greet/greet3").greet;

greet4();
