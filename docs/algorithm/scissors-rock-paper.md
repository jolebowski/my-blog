# Pierre, papier ou ciseaux

Pierre, papier, ciseaux est un jeu classique pour deux joueurs. Chaque joueur choisit soit la pierre, soit le papier, soit les ciseaux. Les objets sont comparés, et celui qui choisit l'objet le plus puissant gagne.

Les résultats possibles sont :

La pierre détruit les ciseaux.
Les ciseaux coupent le papier.
Le papier recouvre la pierre.
En cas d'égalité, le jeu se termine par un match nul.

```js
//Get the user’s choice.

const getUserChoice = (userInput) => {
  userInput = userInput.toLowerCase();
  if (
    userInput === "rock" ||
    userInput === "paper" ||
    userInput === "scissors"
  ) {
    return userInput;
  } else {
    console.log("Error : please type : scissors, rock, paper");
  }
};
//Get the computer’s choice.
const getComputerChoice = () => {
  const ramdomNumber = Math.floor(Math.random() * 3);
  switch (ramdomNumber) {
    case 0:
      return "rock";
      break;
    case 1:
      return "paper";
      break;
    case 2:
      return "scissors";
      break;
    default:
      return "null";
  }
};
//Compare the two choices and determine a winner.

const determineWinner = (userChoice, computerChoice) => {
  if (userChoice === computerChoice) {
    return "The game was a tie";
  }
  if (userChoice === "rock") {
    if (computerChoice === "paper") {
      return "The computer won";
    } else {
      return "The user won";
    }
  }
  if (userChoice === "paper") {
    if (computerChoice === "rock") {
      return "The user won";
    } else {
      return "The computer won";
    }
  }
  if (userChoice === "scissors") {
    if (computerChoice === "rock") {
      return "The computer won";
    } else {
      return "The user won";
    }
  }
};
//Start the program and display the results.
const playGame = () => {
  const userChoice = getUserChoice("scissors");
  console.log(`user : ${userChoice}`);
  const computerChoice = getComputerChoice();
  console.log(`computer : ${computerChoice}`);
  console.log(determineWinner(userChoice, computerChoice));
};
```
