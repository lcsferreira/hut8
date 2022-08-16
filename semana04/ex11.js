const phrases = [" h3ll0 w0rld", " w3b d3v3l0p3r ", "0tterw1s3", "j4v4scr1pt "];

const decryptPhrases = () => {
  return phrases.map((phrase) => {
    return decrypt(phrase);
  });
};

const decrypt = (phrase) => {
  let newPhrase;
  newPhrase = phrase.trim();
  newPhrase = newPhrase.replace(/3/g, "e");
  newPhrase = newPhrase.replace(/1/g, "i");
  newPhrase = newPhrase.replace(/4/g, "a");
  newPhrase = newPhrase.replace(/0/g, "o");
  newPhrase = newPhrase.replace(/5/g, "s");
  return newPhrase;
};
console.log(decryptPhrases());
