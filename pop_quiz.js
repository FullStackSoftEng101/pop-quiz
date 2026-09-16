// 1.  Create and connect an `index.js` file to `index.html`.
// 2.  Create a `score` variable to keep track of how many questions the user answers correctly.
let score = 0;
let count = 0;

// 3.  Prompt the user to answer at least 3 multiple choice questions.
const answer_0 = prompt(`AND && = true if both operands are true?
    Enter 'T' for true
  Enter 'F' for false`);
if (answer_0 === "t" || answer_0 === "T") {
  score += 10;
  count += 1;
  alert("correct answer! you have 10 point");
} else {
  alert("incorrect answer equals 0 points");
}
const answer_1 = prompt(`OR || = true if one operand is true?
    Enter 'T' for true
  Enter 'F' for false`);
if (answer_1 === "t" || answer_1 === "T") {
  score += 10;
  count += 1;
  alert("correct answer! you have 10 point");
} else {
  alert("incorrect answer equals 0 points");
}
const answer_2 = prompt(`enter a number between 10 & 100?`);

if (Number.isNaN(answer_2)) {
  alert("You did not even enter a number");
} else if (answer_2 < 10 || answer_2 > 100) {
  alert("Incorret number, You must enter a number only between 10 to 100");
} else {
  alert(
    `you entered ${answer_2} which is a correct number in the range! you have 10 more points`,
  );
  score += 10;
  count += 1;
}
let rank;
if (count === 3) {
  rank = "First";
} else if (count === 2) {
  rank = "Second";
} else if (count === 1) {
  rank = "Third";
} else {
  rank = "none";
}

alert(`You've answered ${count} questions correctly 
    you are ranked ${rank}`);
//     1. Each question should have at least 2 choices.
//     2. Validate the user's input each time.
//     3. Update the `score` if the user answers correctly.
// 4.  After the quiz, show the user a different message depending on their performance.
//     There should be distinct messages for at least these scenarios:
//     1. The user answered 0 questions correctly.
//     2. The user answered all questions correctly.
//     3. The user answered some questions correctly.
