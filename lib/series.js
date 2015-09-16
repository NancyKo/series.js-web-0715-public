'use strict';

function Series(someDigits){
  this.digits = someDigits.split('').map(Number)
  this.slices = function(onNumber) {
    var newArray = [];
    for(var i = 0; i < this.digits.length; i++) {
      newArray.push(this.digits.splice(i, onNumber));
    }
    return newArray;
  };
}
