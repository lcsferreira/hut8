let startHour = 18;
let endHour = 2;

let gameDuration;

if (startHour > endHour) {
  gameDuration = endHour - startHour + 24;
  console.log(`${gameDuration} Horas`);
} else {
  gameDuration = endHour - startHour;
  console.log(`${gameDuration} Horas`);
}
