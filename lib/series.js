'use strict';

function Series(someDigits){
  this.digits = someDigits.split('').map(Number)
  Series.prototype.slices = function(chunkSize) {
    var newArray = [];
    for(var i = 0; i < this.length; i+=chunkSize) {
      newArray.push(this.slice(i, i+chunkSize));
    return newArray;
    }
  };
}


