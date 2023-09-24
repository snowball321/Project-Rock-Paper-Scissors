
function getComputerChoice(){
    const choices=["Rock","Paper","Scissors"]
    const randomIndex = Math.floor(Math.random() * 3);
    return choices[randomIndex]
}
function playRound(playerSelection,computerSelection){
        let youPick=playerSelection.toUpperCase()
        let computerPick=computerSelection.toUpperCase()
    if (youPick==computerPick){
        return "Draw!"
    }
    else if(youPick=="ROCK"&&computerPick=="PAPER"){
        return "You Lose! Paper beats Rock"
    }
    else if(youPick=="PAPER"&&computerPick=="SCISSORS"){
        return "You Lose! Scissors beats Paper "
    }
    else if(youPick=="SCISSORS"&&computerPick=="ROCK"){
        return "You Lose! Rock beats Scissors"
    }
    else{
        return "You Won!"
    }

}
function game(){
    let n=1
    for (let i=0;i<5;i++){
        let result =playRound(prompt("Your choice:"),getComputerChoice())
        console.log(`Round${n}: ${result}`)
        n++
    }
}
