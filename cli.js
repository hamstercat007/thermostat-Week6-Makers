const Thermostat = require("./thermostat")
const readlineSync = require("readline-sync")

const thermostat = new Thermostat();

let playing = true;

while(playing) {

  console.log(`Temperature is ${thermostat.temperature}`)
  readlineSync.setDefaultOptions({prompt: 'Enter command '});
  command = readlineSync.prompt()

  switch(command) {
    case "up":
      thermostat.up()
      break;
    case "down":
      thermostat.down()
      break;
    case "quit":
      playing = false;
  }

}