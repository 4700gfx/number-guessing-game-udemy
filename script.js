'use strict';

//Variables for Elements 


const number = document.querySelector('.number');
let guessedNumber = document.querySelector('.guess');

const checkButton = document.querySelector('.check')
const resetButton =  document.querySelector('.again')
const scoreDisplay = document.querySelector('.score');
const highScoreDisplay = document.querySelector('.highscore')


let score = 20;
let highScore = 0;


let secretNumber = Math.trunc(Math.random() * 20) + 1;

const displayMessage = function(message){
  document.querySelector('.message').textContent = message 
}

const checkWinner = (message) => {
  if (message === 'Correct Number 🎉'){
    document.querySelector('body').style.backgroundColor = '#60b347'
    number.style.width = "30rem"
    guessedNumber.value = " "
  } else if (message === 'YOU LOSE ‼️'){
    score = 0;
    document.querySelector('body').style.backgroundColor = 'red'
    scoreDisplay.textContent = score; 
    guessedNumber.value = " "
  }
}


checkButton.addEventListener("click", ()=> {
  const guess = guessedNumber.value;
  console.log(guess)

  if(!guess){
    displayMessage('Not A Number ⛔️')
  } else if (guess == secretNumber){
    number.textContent = secretNumber;
    displayMessage('Correct Number 🎉')
    checkWinner('Correct Number 🎉')

    if(score > highScore){
      highScore = score;
      highScoreDisplay.textContent = score
    }


  } else if (guess!==secretNumber){
    //If Score is Above 1 
    if (score > 1 ){
      //Message Based on if Guess is Higher or Lower than Score 
      displayMessage(guess > secretNumber ? 'Number Too High ⬆️' : 'Number Too Low ⬆️');
      score --;
      scoreDisplay.textContent = score; 
      guessedNumber.value = " "
    } else {
      displayMessage('YOU LOSE ‼️')
      checkWinner('YOU LOSE ‼️')
    }
  }

})


resetButton.addEventListener('click', ()=>{
  score = 20;
  scoreDisplay.textContent = score; 
  displayMessage('Start Guessing ...')
  number.style.width = `15rem`
  number.textContent = " ? "
  document.querySelector('body').style.backgroundColor = '#222'
  secretNumber = Math.trunc(Math.random() * 20) + 1;

})