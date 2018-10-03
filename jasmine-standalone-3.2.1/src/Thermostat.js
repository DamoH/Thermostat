function Thermostat() {
  this.temperature = 20;
  this.mode = 'default'
}

Thermostat.prototype.up = function(number) {
  this.temperature += number;
};

Thermostat.prototype.down = function(number) {
  this.temperature -= number;
  if (this.temperature < 10) {
    this.temperature = 10}
  else {
    return this.temperature
  }

}
