let phrase = "Oi, Semana 2 do processo seletivo";

function countWords(phrase) {
  let words = phrase.split(" ");
  return words.length;
}

let totalWords = countWords(phrase);
console.log(totalWords);
