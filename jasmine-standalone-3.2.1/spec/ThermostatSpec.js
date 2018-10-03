describe ('Thermostat', function () {
  var thermostat;
  beforeEach(function() {
    thermostat = new Thermostat();
  });
  it ('the termostat starts at 20 degrees', function () {
    expect(thermostat.temperature).toEqual(20);
  });

  it ('has an increase function', function() {
    thermostat.up(2)
    expect(thermostat.temperature).toEqual(22);
  });

  it ('has a decrease function', function () {
    thermostat.down(4)
    expect(thermostat.temperature).toEqual(16);
  });

  it ('has a minimum temperature of 10 degrees', function() {
    thermostat.down(11)
    expect(thermostat.temperature).toEqual(10);
  });

  it ('it has a powersaving mode on by default', function(){
    expect(thermostat.mode).toEqual('on');
  });

  it('If power saving mode is on, the maximum temperature is 25 degrees', function() {
    thermostat.up(10)
    expect(thermostat.temperature).toEqual(25);
  });

  it ('if power saving mode is off, the maximum temperature is 32 degrees', function() {
    thermostat.mode = 'off'
    thermostat.up(15)
    expect(thermostat.temperature).toEqual(32);
  });

  it ('it has a reset button', function () {
    thermostat.up(4)
    thermostat.reset()
    expect(thermostat.temperature).toEqual(20);
  });

  it ('should return low usage if temperature is lower than 18 degrees', function () {
    thermostat.down(4)
    thermostat.switch()
    expect(thermostat.usage).toEqual("low-usage");
  });

  it ('if its anything higher than 25, its hot in here', function(){
    thermostat.up(6)
    thermostat.switch()
    expect(thermostat.usage).toEqual("high-usage");
  });



});
