let humanScore = 0;
let computerScore = 0;
let ties = 0;
let result;

function getComputerChoice(){
    const randomNumber = Math.random();
    let computerChoice;
    /*
    if randomNumber,  
    0 -> 1/3 = Rock
    1/3 -> 2/3 = Scissors
    2/3 -> 1 = Paper
    */
    if(randomNumber < 1/3){
        computerChoice = 'Rock';
    }
    else if(2/3 < randomNumber){
        computerChoice = 'Paper'; 
    }
    else{
        computerChoice = 'Scissors';
    }
    return computerChoice;
}

function playRound(humanChoice){
    const computerChoice = getComputerChoice();
    document.getElementById("computerChoice").textContent = computerChoice;

    const winsAgainst = {
        Rock: 'Scissors',
        Paper: 'Rock',
        Scissors: 'Paper'
    }

    document.getElementById("humanChoice").textContent = humanChoice;
    if(humanChoice === computerChoice){
        ties++;
        result = 'Tie';
    }
    else if(winsAgainst[humanChoice] === computerChoice){
        humanScore++;
        result = 'You Won!';
    }else{
        computerScore++;
        result = 'You Lose!';
    }
    document.getElementById("ties").textContent = ties;
    document.getElementById("wins").textContent = humanScore;
    document.getElementById("losses").textContent = computerScore;
    document.getElementById("result").textContent = result;
}

/* 
*****Game Logic*****
Rock and Rock => tie
Paper and Paper => tie
Scissors and Scissors => tie
Rock and Paper => Paper win
Rock and Scissors => Rock win
Paper and Scissors => Scissors win
*/