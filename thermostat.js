class Thermostat {
  constructor() {
    this.temperature = 20
    this.powerSavingMode = true
  }
  getTemperature() {
    return this.temperature
  }

  up() {
    if (this.powerSavingMode && this.temperature >= 25) {
      return 
    }
    // power saving mode = true, max temp is 25
    //power saving mode = off, up to 32 degrees   
    this.temperature += 1
  }

  down() {
    this.temperature -= 1
  }

  //if set to true, temperature can only increase up to 25 degrees. 
  //functions have single responsibility. This will turn on power saving mode. 

  setPowerSavingMode(state) {
    this.powerSavingMode = state
  }
}
module.exports = Thermostat;