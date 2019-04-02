'use strict';
module.exports = function() {
  let randomNumber = 0;

  function SecretNumber(){
    if(randomNumber === 0){
      randomNumber = Math.random()*(1000000);
    return randomNumber;
    } else {
      return randomNumber;
    }
  }
  return SecretNumber;
};