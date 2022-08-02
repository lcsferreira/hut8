let encriptedStrings = [
  " h3ll0 w0rld",
  " w3b d3v3l0p3r ",
  "0tterw1s3",
  "j4v4scr1pt ",
];

encriptedStrings.forEach((string) => {
  string = string.replace(
    /1|3|4|5|0/gi,
    function substituteNumberLetter(number) {
      switch (number) {
        case "1":
          return "i";
          break;
        case "3":
          return "e";
          break;
        case "4":
          return "a";
          break;
        case "5":
          return "s";
          break;
        case "0":
          return "o";
          break;
        default:
          break;
      }
    }
  );
  string = string.trim();
  console.log(string);
});
