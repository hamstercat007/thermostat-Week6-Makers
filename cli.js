const Thermostat = require("./thermostat")

const readline = require('readline')

let rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question("What is your name?", function(answer) {
  // TODO: Log the answer in a database. //this is an inline anonymous function. 
  console.log(`Your name is ${answer}`);

  rl.close();
});

