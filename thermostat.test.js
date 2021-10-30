const Thermostat = require("./thermostat")

describe('Thermostat', () => {
  beforeEach(() => {
    thermostat = new Thermostat()
  })

  it('.getTemperature returns 20', () => {
    expect(thermostat.getTemperature()).toBe(20)
  }) 

  it('.up increases the temperature by 1', () => {
    thermostat.up()
    thermostat.up()
  expect(thermostat.getTemperature()).toEqual(22)    
  })

  it('.down decreases the temperature by 1', () => {
    thermostat.up()
    thermostat.up()
    thermostat.down()
    expect(thermostat.getTemperature()).toEqual(21)
  })

  it('has a minimum temperature of 10C', () => {
    for (let i = 0 ; i < 20 ; i++) {
      thermostat.down();
      } 
      expect(thermostat.getTemperature()).toEqual(10)
  })

  it('.setPowerSavingMode when turned on will be a max of 25C', () => {
    for (let i = 0 ; i < 10 ; i++) {
    thermostat.up();
    } 
    expect(thermostat.getTemperature()).toEqual(25)
  })

  it('.setPowerSavingMode off will be a max of 32C', () => {
    thermostat.setPowerSavingMode(false)
    for (let i = 0 ; i < 20 ; i++) {
      thermostat.up();
      } 
      expect(thermostat.getTemperature()).toEqual(32)
  })

  it('.reset will set the temperature back to 20', () => {
    thermostat.up()
    thermostat.up()
    thermostat.reset() 
    expect(thermostat.getTemperature()).toEqual(20)
  })

  it('can tell you the energy usage for medium-usage', () => {
    expect(thermostat.energyUsage()).toEqual("medium-usage")
  })

  it('can tell you the energy usage for low-usage', () => {
    for (let i = 0 ; i < 10 ; i++) {
      thermostat.down();
      } 
    expect(thermostat.energyUsage()).toEqual("low-usage")
  })

  it('can tell you the energy usage for high-usage', () => {
    thermostat.setPowerSavingMode(false)
    for (let i = 0 ; i < 30 ; i++) {
      thermostat.up();
      } 
    expect(thermostat.energyUsage()).toEqual("high-usage")
  })
})