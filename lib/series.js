'use strict';

function Series(someDigits, i ){
  this.digits = someDigits.split('').map(Number);
  this.slices = someDigits.split('').map(Number).slice(i);
};