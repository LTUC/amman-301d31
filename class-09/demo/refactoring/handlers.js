
const obj = {};

obj.randomNumberBetween = function(min,max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
  };

  obj.testFunc = function()
  {
      console.log('hi');
  }

module.exports = obj;