let wins = 0
let losses = 0
let ties = 0

function computersmove() {
    let randint = Math.floor(Math.random() * 3)
    if (randint === 0) {
        return "rock"
    }
    if (randint === 1) {
        return "paper"
    }
    if (randint === 2) {
        return "scissors"
    }
}

function updateScore(result) {
    if (result === "win") {
        wins = wins + 1;
        document.getElementById("wins").innerHTML = wins;
    }
    if (result === "lose") {
        losses = losses + 1;
        document.getElementById("losses").innerHTML = losses;
    }
        if (result === "tie") {
        ties = ties + 1;
        document.getElementById("ties").innerHTML = ties;
    }
}

function onClickPaper() {
let cm = computersmove();
if (cm === "rock") {
    // win
    updateScore("win");
    alert("The Computer has picked Rock - You Win.");
}
if (cm === "scissors") {
    // loss
    updateScore("lose");
    alert("The Computer has picked Scissors - You Lose.");
}
if (cm === "paper") {
    // tie
    updateScore("tie");
    alert("The Computer has picked Paper - You Tie.");
}
}

function onClickScissors() {
let cm = computersmove();
if (cm === "rock") {
    // loss
    updateScore("lose");
    alert("The Computer has picked Rock - You Lose.");    
}
if (cm === "scissors") {
    // tie
    updateScore("tie");
    alert("The Computer has picked Scissors - You Tie.");
}
if (cm === "paper") {
    // win
    updateScore("win");
    alert("The Computer has picked Paper - You Win.");
}
}

function onClickRock() {
    let cm = computersmove();
    if (cm === "rock") {
        // tie
        updateScore("tie");
        alert("The Computer has picked Rock - You Tie.");    
    }
    if (cm === "scissors") {
        // win
        updateScore("win");
        alert("The Computer has picked Scissors - You Win.");
    }
    if (cm === "paper") {
        // loss
        updateScore("lose");
        alert("The Computer has picked Paper - You Lose.");
    }
}

document.getElementById("rock").onclick = onClickRock;
document.getElementById("paper").onclick = onClickPaper;
document.getElementById("scissors").onclick = onClickScissors;