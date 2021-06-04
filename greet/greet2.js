function Greetr() {
  this.greetings = "Hello world!!!!";
  this.greet = function () {
    console.log(this.greetings);
  };
}

module.exports = Greetr;
