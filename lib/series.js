'use strict';

function Series(someDigits){
  this.digits = someDigits.split('').map(Number)
  Series.prototype.slices = function(chunkSize) {
    var newArray = [];
    if (this.digits.length < chunkSize) {
      throw new Error("Slice size is too big.");
    }
    for(var i = 0; i < (this.digits.length - (chunkSize - 1)); i++) {
      newArray.push(this.digits.slice(i, i+chunkSize));
    }
    return newArray;
  }
}
