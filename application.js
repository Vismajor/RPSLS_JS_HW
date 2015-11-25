$(document).ready(function() {
  choices = ["rock", "paper", "scissors", "lizard", "spock"];
  playerChoice = "";
  cpuChoice = "";
  // test = "test";
  wins = 0;
  loses = 0;



function game(playerChoice, cpuChoice){
   result = '';
 if(playerChoice == 'rock') {
    if(cpuChoice == 'rock') {
    result = "draw";
    } else if(cpuChoice == 'paper' || 'spock') {
    result = "lose";
    lose();
    } 
    else if(cpuChoice == 'scissors' || 'lizard'){
    result = "win";
    }win();
  }else if(playerChoice == 'paper') {
     if(cpuChoice == 'paper') {
     result = "draw";
     } else if(cpuChoice == 'scissors' || 'lizard') {
     result = "lose";
     lose();
     } else if(cpuChoice == 'rock' || 'spock'){
     result = "win";
     }win();
   }else if(playerChoice == 'scissors') {
      if(cpuChoice == 'scissors') {
      result = "draw";
      } else if(cpuChoice == 'rock' || 'spock') {
      result = "lose";
      lose();
      } else if(cpuChoice == 'paper' || 'lizard'){
      result = "win";
      }win();
    }else if(playerChoice == 'lizard') {
       if(cpuChoice == 'lizard') {
       result = "draw";
       } else if(cpuChoice == 'rock' || 'scissors') {
       result = "lose";
       lose();
       } else if(cpuChoice == 'spock' || 'paper'){
       result = "win";
       }win();
    }else if(playerChoice == 'spock') {
       if(cpuChoice == 'spock') {
       result = "draw";
       } else if(cpuChoice == 'paper' || 'lizard') {
       result = "lose";
       lose();
       } else if(cpuChoice == 'rock' || 'scissors'){
       result = "win";
       win();  
    };
  } else {
    return false;
  };
    return result;
};

function lose(){
  loses = loses +1
};

function win(){
  wins = wins +1
};


$(".choices").click(function() {
    playerChoice = $(this).attr('id');
    cpuChoice = choices[Math.floor(Math.random() * choices.length)];
    gameResult = game(playerChoice, cpuChoice);

    // if(gameResult == 'win') 
    //   console.log("win");
  });




});