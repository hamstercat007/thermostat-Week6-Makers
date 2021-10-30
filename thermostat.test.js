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
      expect(thermostat.getTemperature()).toEqual(40)
  })
})