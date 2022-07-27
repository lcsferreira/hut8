function formatTime(seconds) {
  let hours, minutes;

  minutes = Math.floor(seconds / 60);
  seconds = seconds % 60;
  hours = Math.floor(minutes / 60);
  minutes = minutes % 60;

  return `${hours}:${minutes}:${seconds}`;
}

const formattedTime = formatTime(600);
console.log(formattedTime);
