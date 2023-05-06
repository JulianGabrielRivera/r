const words = ["hey", "hi", "why", "hhey"];

const randomWord = words[Math.floor(Math.random() * words.length)];
console.log(randomWord);
let wordLength = randomWord.length;
console.log(wordLength);
const arr = Array(wordLength);
console.log(arr);
const winningWord = arr.fill("_", 0, wordLength);
console.log(winningWord);

winningWord.forEach((blank) => {
  console.log(blank);
  document.createElement("p");
});
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
