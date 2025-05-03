'use strict';

//Variables for Elements 

const message = document.querySelector('.message');
const number = document.querySelector('.number');
let guessedNumber = document.querySelector('.guess');

const checkButton = document.querySelector('.check')
const resetButton =  document.querySelector('.again')
const scoreDisplay = document.querySelector('.score');
const highScoreDisplay = document.querySelector('.highscore')


let score = 20;
let highScore = 0;


let secretNumber = Math.trunc(Math.random() * 20) + 1;


checkButton.addEventListener("click", ()=> {
  const guess = guessedNumber.value;
  console.log(guess)

  if(!guess){
    message.textContent = 'Not A Number ⛔️'
  } else if (guess == secretNumber){
    number.textContent = secretNumber;
    message.textContent = 'Correct Number 🎉'
    document.querySelector('body').style.backgroundColor = '#60b347'
    number.style.width = "30rem"
    guessedNumber.value = " "

    if(score > highScore){
      highScore = score;
      highScoreDisplay.textContent = score
    }


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


resetButton.addEventListener('click', ()=>{
  score = 20;
  scoreDisplay.textContent = score; 
  message.textContent = 'Start Guessing ...'
  number.style.width = `15rem`
  number.textContent = " ? "
  document.querySelector('body').style.backgroundColor = '#222'
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  

})