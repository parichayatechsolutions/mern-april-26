document.getElementById("demo").innerHTML = "Hello World";

alert('Welcome to JavaScript');

const x = 10;
const y = 4;
let z = x + y;
document.getElementById('a').innerHTML = "the value of x is" + " " + x;
document.getElementById('b').innerHTML = "the value of y is" + " " + y;
document.getElementById('c').innerHTML = "the total value is" + " " + z

let c = x * y;
document.getElementById('d').innerHTML = "the value of c is" + " " + c;

let d = x / y;
document.getElementById('e').innerHTML = "the value of d is" + " " + d;

let e = x - y;
document.getElementById('f').innerHTML = "the value of e is" + " " + e;

let f = x % y;
document.getElementById('g').innerHTML = "the value of f is" + " " + f;

let g = x ** y;
document.getElementById('h').innerHTML = "the value of g is" + " " + g;

let a = 8;
let h = a++;
document.getElementById('i').innerHTML = "the value of h is" + " " + h;

let b = 8;
let i = b--;
document.getElementById('j').innerHTML = "the value of i is" + " " + i;

let age = 16;
let country = "USA";
let text = "You can Not drive!";

if (country == "USA" && age >= 16) {
  text = "You can drive!";
}
function myIf() {
  let age = document.getElementById("ifinput").value;
  let text = (age > 18) ? "you are eligible to vote" : "you are not eligible to vote";
  document.getElementById("if").innerHTML = text;
}


function myIfElseIf() {
  let time = document.getElementById("ifelinput").value;
  let greeting;
  if (time < 12) {
    greeting = "Good morning";
  } else if (time < 15) {
    greeting = "Good afternoon";
  } else if (time < 17) {
    greeting = "Good evening";
  } else {
    greeting = "Good night";
  }
  document.getElementById("ifelif").innerHTML = greeting;
}

function mySwitch() {
  let dayNumber= parseInt(document.getElementById("switchinput").value);
  let d;
  switch (dayNumber) {
    case 0:
      d = "Sunday";
      break;
    case 1:
      d = "Monday";
      break;
    case 2:
      d = "Tuesday";
      break;
    case 3:
      d = "Wednesday";
      break;
    case 4:
      d = "Thursday";
      break;
    case 5:
      d = "Friday";
      break;
    case 6:
      d = "Saturday";
      break;
    default:
      d = "Invalid day";
  }
  document.getElementById("switchresult").innerHTML = d;
}