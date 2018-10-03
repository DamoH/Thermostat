function Thermostat() {
  this.temperature = 20;
  this.mode = 'on'
}

Thermostat.prototype.up = function(number) {
  this.temperature += number;
  if (this.temperature > 25) {
    this.temperature = 25}
  else {
    return this.temperature
  };
};

Thermostat.prototype.down = function(number) {
  this.temperature -= number;
  if (this.temperature < 10) {
    this.temperature = 10}
  else {
    return this.temperature
  };
};
