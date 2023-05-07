const words = ["hey", "hi", "why", "hhey"];

const randomWord = words[Math.floor(Math.random() * words.length)];
console.log(randomWord);
let wordLength = randomWord.length;
console.log(wordLength);
const arr = Array(wordLength);
console.log(arr);
const winningWord = arr.fill("_", 0, wordLength);
console.log(winningWord);
const rebirth = document.querySelector(".rebirth");
console.log(rebirth);
let fillIn;
winningWord.forEach((blank) => {
  fillIn = document.createElement("p");
  fillIn.innerText = blank;
  console.log(blank);
  console.log(fillIn);

  rebirth.appendChild(fillIn);
  //   fillIn.innerText = blank;
});
let allBlanks = document.querySelectorAll("p");
console.log(allBlanks);

// console.log(allBlanks[2]);
// for (let i = 0; i < winningWord.length; i++) {
//   fillIn = document.createElement("p");
// }
window.addEventListener("keypress", (e) => {
  console.log(e.key);
  while (wordLength > 0) {
    for (let i = 0; i < randomWord.length; i++) {
      console.log(randomWord[i], i);
      if (e.key === randomWord[i]) {
        console.log(true);
        winningWord.splice(i, 1, randomWord[i]);
        console.log(winningWord);
        wordLength--;
        console.log(wordLength);
        console.log(fillIn);
        console.log(winningWord.indexOf(winningWord[i]), "index");
        console.log(allBlanks[winningWord.indexOf(winningWord[i])]);
        // allBlanks[winningWord.indexOf(winningWord[i])].innerText =
        allBlanks[i].innerText = randomWord[i];
      } else {
        console.log(i);
        wordLength--;
        console.log(wordLength);
      }
    }
  }
  wordLength = randomWord.length;
  if (winningWord.join("") === randomWord) {
    prompt("you win");
  }
  console.log(winningWord.join(""));
});
