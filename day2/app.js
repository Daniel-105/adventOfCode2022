const sampleInput = `C Z
C X
B Z
A X
A Z
C Z
A Y
C Z
C Z`;

// A = Rock
// B = Paper
// C = Scissors

// X = Rock
// Y = Paper
// Z = Scissors

const win = (player1, player2) => {
  if (
    (player1 === scissors[0] || player1 === scissors[1]) &&
    (player2 === scissors[0] || player2 === scissors[1])
  ) {
    console.log("Draw");
  } else if (
    (player1 === scissors[0] || player1 === scissors[1]) &&
    (player2 === rock[0] || player2 === rock[1])
  ) {
    console.log("Player 2 wins");
  } else if (
    (player1 === scissors[0] || player1 === scissors[1]) &&
    (player2 === paper[0] || player2 === paper[1])
  ) {
    console.log("Player 1 wins");
  } else if (
    (player1 === rock[0] || player1 === rock[1]) &&
    (player2 === paper[0] || player2 === paper[1])
  ) {
    console.log("Player 2 wins");
  } else if (
    (player1 === rock[0] || player1 === rock[1]) &&
    (player2 === rock[0] || player2 === rock[1])
  ) {
    console.log("Draw");
  } else if (
    (player1 === rock[0] || player1 === rock[1]) &&
    (player2 === scissors[0] || player2 === scissors[1])
  ) {
    console.log("Player 1 wins");
  } else if (
    (player1 === paper[0] || player1 === paper[1]) &&
    (player2 === scissors[0] || player2 === scissors[1])
  ) {
    console.log("Player 2 wins");
  } else if (
    (player1 === paper[0] || player1 === paper[1]) &&
    (player2 === paper[0] || player2 === paper[1])
  ) {
    console.log("Draw");
  } else if (
    (player1 === paper[0] || player1 === paper[1]) &&
    (player2 === rock[0] || player2 === rock[1])
  ) {
    console.log("Player 1 wins");
  }
};

const rock = ["A", "X"];
const paper = ["B", "Y"];
const scissors = ["C", "Z"];

const rounds = sampleInput.split("\n").map((round) => round.split(" "));

console.log(rounds);

// rounds.forEach(win());
// rounds.map((round) => win(round[0], round[1]));

//callbackfn [ , thisArg ] )

// win(rounds[0][0], rounds[0][1]);

console.log(rounds.map((round) => win(round[0], round[1])));

// if (
//   rounds[0][0] === scissors[0] ||
//   (rounds[0][0] === scissors[1] && rounds[0][1] === scissors[0]) ||
//   rounds[0][1] === scissors[1]
// )
//   console.log("Draw");
