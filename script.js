let body = document.body;
let choose = document.querySelector(".upper");

let winnerStatus = document.createElement("div");
winnerStatus.className = "winnerStatus";
choose.appendChild(winnerStatus);

let stone = document.querySelector(".Stone");
let scissors = document.querySelector(".Scissors");
let Pouch = document.querySelector(".Paper");
let userColor = document.querySelector(".user-color-status");
let resetButton = document.querySelector(".reset");
let draw = document.querySelector(".draw");
let declareWinner = document.querySelector(".winner-status");
let winnerColor = document.querySelector(".winner-color");
let userStatus = document.querySelector(".user");
let compStatus = document.querySelector(".comp");
let colorstatContainer = document.querySelector(".color-stat");

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
}

function generateComputerChoice() {
  let randomElement =
    computerChoices[Math.floor(Math.random() * computerChoices.length)];

  computerChoice = randomElement;
  generateWinner(computerChoice, userValue);
}

function generateWinner(computer, user) {
  colorstatContainer.appendChild(userColor);
  declareWinner.innerHTML = "";
  if (
    (computer == "Scissors" && user == "Scissors") ||
    (computer == "Rock" && user == "Rock") ||
    (computer == "Paper" && user == "Paper")
  ) {
    userColor.innerHTML = "It's a tie!";
    user = "";
    computer = "";
    drawRoundsCounter++;
    userColor.style.backgroundColor = "#8585C7";
    drawRounds(drawRoundsCounter);

    //user losese
  } else if (
    (computer == "Rock" && user == "Scissors") ||
    (computer == "Scissors" && user == "Paper") ||
    (computer == "Paper" && user == "Stone")
  ) {
    userColor.innerHTML = "You lost this round!";
    userColor.style.backgroundColor = "red";
    user = "";
    computer = "";
    computerScore++;
  } else if (
    //user winns
    (user == "Rock" && computer == "Scissors") ||
    (user == "Scissors" && computer == "Paper") ||
    (user == "Paper" && computer == "Rock")
  ) {
    userColor.innerHTML = "You won this round!";
    userColor.style.backgroundColor = "green";
    user = "";
    computer = "";
    userScore++;
  }
  winnerStatus.innerHTML = `
  <div class= you-container> 
   <p class="you">You</p>
   <p class="user-score">${userScore}</p>
  </div>
  <div class= comp-container>
  <p class="comp">Computer</p>
  <p class="computer-score">${computerScore}</p
  </div>
  `;
  drawRounds(userScore, computerScore);
  winsOverTen(userScore, computerScore);
}

function resetScore() {
  if (userScore > 0 || computerScore > 0 || drawRoundsCounter > 0) {
    console.log("test");
    userScore = 0;
    computerScore = 0;
    drawRoundsCounter = 0;
    userColor.remove();
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
  draw.innerHTML = `<p style:"margin-left: auto;
  ">Antalet oavgjorda: ${counter}</p>`;
}

function winsOverTen(computerScore, userScore) {
  if (computerScore == 10) {
    resetScore();
    declareWinner.innerHTML = "Grattis! Du vann";
  } else if (userScore == 10) {
    resetScore();
    declareWinner.innerHTML = "Datorn vann!";
  }
}
