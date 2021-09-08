const hours = ['7am', '8am', '9am'];


const handler = require('./handlers');

const Store = function(location, min, max, avg) {
  this.location = location;
  this.minCustomersPerHour = min;
  this.maxCustomersPerHour = max;
  this.avgCookiesPerCustomer = avg;
  this.projections = {};
  this.projectSales();
  Store.stores.push(this);
};

Store.stores = [];

Store.prototype.projectSales = function() {
  hours.forEach( (hour) => {
    this.projections[hour] = handler.randomNumberBetween(this.minCustomersPerHour, this.maxCustomersPerHour) * this.avgCookiesPerCustomer;
  });
};

console.log(handler.testFunc);

module.exports = Store;
