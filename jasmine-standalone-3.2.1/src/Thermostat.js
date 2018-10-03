function Thermostat() {
  this.temperature = 20;
  this.mode = 'on'
  this.usage = 'medium-usage'
}

Thermostat.prototype.up = function(number) {
  this.temperature += number;
  switch (this.mode) {
    case 'on':
      if (this.temperature > 25) {
        this.temperature = 25}
      else {
        return this.temperature
      }
    case 'off':
      if (this.temperature > 32) {
        this.temperature = 32}
      else {
        return this.temperature
      }
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


Thermostat.prototype.reset = function () {
  this.temperature = 20
};

Thermostat.prototype.switch = function() {
  if (this.temperature < 18) {
    this.usage = "low-usage"}
  else {
    return this.usage = "medium-usage"
  }
};
