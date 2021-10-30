class Thermostat {
  constructor() {
    this.temperature = 20
    this.powerSavingMode = true
  }
  getTemperature() {
    return this.temperature
  }

  up() {
    if ((this.powerSavingMode && this.temperature >= 25) || (this.powerSavingMode == false && this.temperature >= 32)) {
      return 
    }  
    this.temperature += 1
  }

  down() {
    if (this.temperature <= 10) {
      return
    }
    this.temperature -= 1
  }

  //if set to true, temperature can only increase up to 25 degrees. 
  //functions have single responsibility. This will turn on power saving mode. 

  setPowerSavingMode(state) {
    this.powerSavingMode = state
  }

  reset() {
    this.temperature = 20
  }

  energyUsage() {
    // this.temperature < 17 { low usage }
    //if this.temperature >= 18 && this.temperature <= 25  { medium -usage }
    //else high -usage 
    if (this.temperature < 17) {
      return "low-usage"
    }
    else if (this.temperature <= 25) {
      return "medium-usage"
    }
    return "high-usage"
  }
}
module.exports = Thermostat;