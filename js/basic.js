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

let a=8;
let h = a++;
document.getElementById('i').innerHTML = "the value of h is" + " " + h;

let b=8;
let i = b--;
document.getElementById('j').innerHTML = "the value of i is" + " " + i;
 
let age = 16;
let country = "USA";
let text = "You can Not drive!";

if (country == "USA" && age >= 16) {
  text = "You can drive!";
}
function myIf(){
document.getElementById("if").innerHTML = "You are 16 above: " + text;
}

const time = new Date().getHours();
let greeting;
if (time < 12) {
  greeting = "Good morning";
} else if (time < 15) {
  greeting = "Good afternoon";
}else if (time < 17) {
  greeting = "Good evening";
} else {
  greeting = "Good night";
}
function myIfElseIf(){
document.getElementById("ifel").innerHTML = greeting;}