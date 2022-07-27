let value1 = 90;
let value2 = 7;
let value3 = 9;

if (value1 >= value2 && value1 >= value3) {
  //value 1 biggest
  if (value2 >= value3) {
    console.log(value3, value2, value1);
  } else {
    console.log(value2, value3, value1);
  }
} else if (value2 >= value3 && value2 >= value1) {
  //value 2 biggest
  if (value3 >= value1) {
    console.log(value1, value3, value2);
  } else {
    console.log(value3, value1, value2);
  }
} else {
  //value 3 biggest
  if (value2 >= value1) {
    console.log(value1, value2, value3);
  } else {
    console.log(value2, value1, value3);
  }
}
