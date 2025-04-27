'use strict';

//Variables for Elements 

const message = document.querySelector('.message');
const number = document.querySelector('.number');
const score = document.querySelector('.score');
let guessedNumber = document.querySelector('.guess');

const checkButton = document.querySelector('.check')



checkButton.addEventListener("click", ()=> {
  const guess = guessedNumber.value;
  console.log(guess)

  if(!guess){
    message.textContent = 'Not A Number ⛔️'
  }


})