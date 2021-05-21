var events = require("events");
var eventEmitter = new events.EventEmitter();

//Create an event handler:
var myEventHandler = function () {
  console.log("I hear a scream!");
};

var myOtherEventHandler = function () {
  console.log("Me too!");
};

//Assign the event handler to an event:
eventEmitter.on("scream", myEventHandler);
eventEmitter.on("otherScream", myOtherEventHandler);

//Fire the 'scream' event:
eventEmitter.emit("scream");
eventEmitter.emit("otherScream");
