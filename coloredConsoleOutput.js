// use Chalk libary to color text output in console
const chalk = require("chalk");
console.log(chalk.yellow("hi!"));
console.log(chalk.red("diana!"));
console.log(chalk.blue("helloWorld!"));

// create progreess bar using Progress package
const ProgressBar = require("progress");

const bar = new ProgressBar(":bar", { total: 10 });
const timer = setInterval(() => {
  bar.tick();
  if (bar.complete) {
    clearInterval(timer);
  }
}, 100);
