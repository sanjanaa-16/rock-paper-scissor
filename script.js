let humanScore=0;
let computerScore=0;
function getComputerChoice(){
    let choice=getRandomInt(0,1000);
    if((choice%2==0)) {
        return 'rock';
    } else if(choice%5==0)
    {
        return 'paper';
    }else{
        return 'scissor';
    }

    
}
function getRandomInt(min, max) {
    const minCeiled = Math.ceil(min);
    const maxFloored = Math.floor(max);
    return Math.floor(Math.random() * (maxFloored - minCeiled) + minCeiled); // The maximum is exclusive and the minimum is inclusive
  }
function getHumanChoice(){
    let hchoice=prompt('Enter your choice');
    return hchoice;
}
function playRound(humanChoice,computerChoice){
    humanChoice=humanChoice.toLowerCase();
    computerChoice=computerChoice.toLowerCase();
    if(humanChoice===computerChoice){
        alert(`Oops!Same choice.`)
    }
    else if((humanChoice=='rock' && computerChoice=='scissor') || (humanChoice=='paper' && computerChoice=='rock') || (humanChoice=='scissor' && computerChoice=='paper')){
        alert(`You win! ${humanChoice} beats ${computerChoice}`);
        humanScore++;
    } else{
        alert(`You lose! ${computerChoice} beats ${humanChoice}`);
        computerScore++;
    }

}
function playGame(){
    for(let i=0;i<5;i++){
        let human=getHumanChoice();
        let computer=getComputerChoice();
        playRound(human,computer);
    }
    if(humanScore>computerScore){
        alert(`You win.`)
    } else if(computerScore>humanScore){
        alert(`You lose.`)
    } else{
        alert(`Draw.`)
    }
}
playGame();

