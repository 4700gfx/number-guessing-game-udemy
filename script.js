'use strict';

//Variables for Elements 

const message = document.querySelector('.message');
const number = document.querySelector('.number');
let guessedNumber = document.querySelector('.guess');

const checkButton = document.querySelector('.check')
const scoreDisplay = document.querySelector('.score');
let score = 20;



const secretNumber = Math.trunc(Math.random() * 20) + 1;
number.textContent = secretNumber;

checkButton.addEventListener("click", ()=> {
  const guess = guessedNumber.value;
  console.log(guess)

  if(!guess){
    message.textContent = 'Not A Number ⛔️'
  } else if (guess == secretNumber){
    message.textContent = 'Correct Number 🎉'
    document.querySelector('body').style.backgroundColor = '#60b347'
    number.style.width = "30rem"
    guessedNumber.value = " "

  } else if (guess > secretNumber) {
    if (score > 1 ){
      message.textContent = 'Number Too High ⬆️'
      score --;
      scoreDisplay.textContent = score; 
      guessedNumber.value = " "
    } else {
      message.textContent = 'YOU LOSE ‼️'
      score = 0;
      scoreDisplay.textContent = score; 
      guessedNumber.value = " "
    }
  } else if (guess < secretNumber) {  
    if (score > 1 ){
      message.textContent = 'Number Too Low ⬆️'
      score --;
      scoreDisplay.textContent = score; 
      guessedNumber.value = " "
    } else {
      message.textContent = 'YOU LOSE ‼️'
      score = 0;
      scoreDisplay.textContent = score; 
      guessedNumber.value = " "
    }
  }

})