
function getComputerChoice(){
    const choices=["Rock","Paper","Scissors"]
    const randomIndex = Math.floor(Math.random() * 3);
    return choices[randomIndex]
}
function playRound(playerSelection,computerSelection){
        let youPick=playerSelection.toUpperCase()
        let computerPick=computerSelection.toUpperCase()
    if (youPick==computerPick){
        return 0
    }
    else if(youPick=="ROCK"&&computerPick=="PAPER"){
        return -1
    }
    else if(youPick=="PAPER"&&computerPick=="SCISSORS"){
        return -1
    }
    else if(youPick=="SCISSORS"&&computerPick=="ROCK"){
        return -1
    }
    else{
        return 1
    }

}
let score=0
const buttons=document.querySelectorAll("button")
buttons.forEach(button=>button.addEventListener('click',(event)=>{
    const Button = event.target.getAttribute("data-name");
    let result=playRound(Button,getComputerChoice())
    let div1=document.querySelector('.result')
    score+=result
    if (score===3){
        alert('You Won!')
    }
    else if(score==-3){
        alert('You Lose!')
    }
    div1.innerHTML=`Your choice: ${Button}<br>Current score: ${score}`
}))

  