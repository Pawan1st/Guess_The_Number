'use strict';
// Random Number Genrator (1 to 100)
let generatedNumber = Math.trunc(Math.random()*100)+1

// Setting Score
let score = 20;

// Setting HighScore
let highScore = 0;

// Message Function
const displayMessage = function (message) {
    document.querySelector('.message').textContent = message;
  };

//  Result Evaluation
function result(){
    // Guessed Number
    var guess = Number(document.querySelector('.guess').value);
    if(score>0 && guess>0 && guess<101){
        if(score>0){
            // Updating Guess
            document.querySelector('.number').textContent = guess = document.querySelector('.guess').value ;
            if(guess == generatedNumber){
                document.querySelector('body').style.backgroundColor = '#60b347';
                displayMessage('Correct Number!!')
                // Updating high score
                if(score>highScore){
                    document.querySelector('.highscore').textContent = score;
                }
            }
            // hints
            else{
                generatedNumber-guess>10?displayMessage('Very Small'):generatedNumber-guess<10&&generatedNumber-guess>0?displayMessage('Small') :guess-generatedNumber>10?displayMessage('Very Big'):displayMessage('Big')
                document.querySelector('.score').textContent = --score;    
            }
        }
        // If Number of attempts exhaust
        else{
            displayMessage('Game Over!!');
        }
    }
    else{displayMessage('Enter Valid guess!!')}}
    
    //  Restarting Game
    function again(){
        generatedNumber = Math.trunc(Math.random()*100)+1
        displayMessage('Start guessing...');
        document.querySelector('.score').textContent = score = 20;
        document.querySelector('.number').textContent = '?';
        document.querySelector('body').style.backgroundColor = '#222'
        document.querySelector('.guess').value = null;
    }
    
    // Check Button
    document.querySelector('.check').addEventListener('click',result)

    // Play Again Button
    document.querySelector('.again').addEventListener('click',again)
