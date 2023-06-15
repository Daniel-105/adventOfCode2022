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

const rock = ["A", "X"];
const paper = ["B", "Y"];
const scissors = ["C", "Z"];

const rounds = sampleInput.split("\n").map((round) => round.split(" "));

console.log(rounds);

if (
  rounds[0][0] === scissors[0] ||
  (rounds[0][0] === scissors[1] && rounds[0][1] === scissors[0]) ||
  rounds[0][1] === scissors[1]
)
  console.log("Draw");
