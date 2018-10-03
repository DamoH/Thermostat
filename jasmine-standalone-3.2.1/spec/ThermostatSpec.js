describe ('Thermostat', function () {
  it ('the termostat starts at 20 degrees', function () {
    var thermostat = new Thermostat;
    expect(thermostat.temperature).toEqual(20);
  });
});
