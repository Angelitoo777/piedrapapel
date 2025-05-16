let humanScore = 0;
let computerScore = 0;

function getComputerChoice(){
    const game = ["piedra", "papel", "tijera"];
    const randomIndex = Math.floor(Math.random() * game.length);
    console.log(game[randomIndex]);
    return game[randomIndex];
}

function getHumanChoice(){
    const game = prompt("Elige entre piedra, papel o tijera");
    console.log(game);
    return game;

}

function playRound(humanChoice, computerChoice){
    const human = humanChoice.toLowerCase();
    const computer = computerChoice.toLowerCase();

    if (human === "piedra" && computer === "tijera"){
        console.log("Gano el jugador humano");
        humanScore++;
    }else if (human === "papel" && computer === "piedra"){
        console.log("Gano el jugador humano");
        humanScore++;
    }else if (human === "tijera" && computer === "papel"){
        console.log("Gano el jugador humano");
        humanScore++;
    }else if (human === computer){
        console.log("Empate");
    }else {
        console.log("Gano la computadora");
        computerScore++;
    }
}

function playGame(){

    for (let i = 0 ; i < 5; i++){
        const humanSelection = getHumanChoice();
        const computerSelection = getComputerChoice();
        playRound(humanSelection, computerSelection);

        console.log("Puntaje humano: " + humanScore);
        console.log("Puntaje computadora: " + computerScore);

        if (humanScore === 5){
            console.log("El jugador humano ha ganado el juego");
            break;

        }else if (computerScore === 5){
            console.log("La computadora ha ganado el juego");
            break;
        }

    }

}


playGame();

if (humanScore > computerScore){
            console.log("El jugador humano gana");
            
        }else if (humanScore < computerScore){
            console.log("La computadora gana");
            
        }else {
            console.log("Quedan en empate");
        }


