'use strict';
module.exports = function() {
  let randomNumber = Math.random()*1000000;

  function SecretNumber(){
   return randomNumber;
  }
  return SecretNumber;
};