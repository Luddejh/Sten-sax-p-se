let body = document.body;
let choose = document.querySelector(".upper");

let winnerStatus = document.createElement("div");
winnerStatus.className = "winnerStatus";
choose.appendChild(winnerStatus);

let stone = document.querySelector(".Stone");
let scissors = document.querySelector(".Scissors");
let Pouch = document.querySelector(".Paper");
let compHTML = document.querySelector(".comp");
let userHTML = document.querySelector(".user");
let User = document.querySelector(".User");
let computer = document.querySelector(".Computer");
let resetButton = document.querySelector(".reset");
let draw = document.querySelector(".draw");
let declareWinner = document.querySelector(".winner-status");

let userScore = 0;
let computerScore = 0;
let drawRoundsCounter = 0;

let result = stone.addEventListener("click", () => {
  userChoice(stone.className);
  generateComputerChoice();
});

scissors.addEventListener("click", () => {
  userChoice(scissors.className);
  generateComputerChoice();
});

Pouch.addEventListener("click", () => {
  userChoice(Pouch.className);
  generateComputerChoice();
});

resetButton.addEventListener("click", () => {
  resetScore();
});

let computerChoices = ["Rock", "Scissors", "Paper"];

let userValue = "";
let computerChoice = "";

function userChoice(userChoice) {
  userValue = userChoice;
  console.log(userValue);
  console.log(userValue);
}

function generateComputerChoice() {
  let randomElement =
    computerChoices[Math.floor(Math.random() * computerChoices.length)];

  computerChoice = randomElement;
  generateWinner(computerChoice, userValue);
}

function generateWinner(computer, user) {
  console.log("user choice: ", user);
  console.log("computer choice: ", computer);

  if (
    (computer == "Scissors" && user == "Scissors") ||
    (computer == "Rock" && user == "Rock") ||
    (computer == "Paper" && user == "Paper")
  ) {
    console.log("it's a ie");
    user = "";
    computer = "";
    drawRoundsCounter++;
    drawRounds(drawRoundsCounter);

    //user losese
  } else if (
    (computer == "Rock" && user == "Scissors") ||
    (computer == "Scissors" && user == "Paper") ||
    (computer == "Paper" && user == "Stone")
  ) {
    user = "";
    computer = "";
    console.log("computer wins!");
    computerScore++;
  } else if (
    //user winns
    (user == "Rock" && computer == "Scissors") ||
    (user == "Scissors" && computer == "Paper") ||
    (user == "Paper" && computer == "Rock")
  ) {
    console.log("computer loses");
    user = "";
    computer = "";
    userScore++;
    console.log(userScore);
  }
  declareWinner.innerHTML = "";
  winnerStatus.innerHTML = `
  <div class= you-container> 
   <p class="you">You</p>
   <p class="user-score">${userScore}</p>
  </div>
  <div class= comp-container>
  <p class="comp">Comp</p>
  <p class="computer-score">${computerScore}</p
  </div>
  `;
  drawRounds(userScore, computerScore);
  winsOverTen(userScore, computerScore);
}

function resetScore() {
  if (userScore > 0 && computerScore > 0 && drawRoundsCounter > 0) {
    userScore = 0;
    computerScore = 0;
    drawRoundsCounter = 0;
    winnerStatus.innerHTML = `
  <div class= you-container> 
   <p class="you">You</p>
   <p class="user-score">${userScore}</p>
  </div>
  <div class= comp-container>
  <p class="comp">Comp</p>
  <p class="computer-score">${computerScore}</p
  </div>
  `;
    drawRounds(drawRoundsCounter);
  }
}

function drawRounds(counter) {
  draw.innerHTML = `<p>Antalet oavgjorda: ${counter}</p>`;
}

function winsOverTen(computerScore, userScore) {
  if (computerScore == 10) {
    resetScore();
    declareWinner.innerHTML = "Grattis! Du vann";
  } else if (userScore == 10) {
    resetScore();
    declareWinner.innerHTML = "Datorn vann! du förlora";
  }
}
