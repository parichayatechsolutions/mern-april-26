function myFunction() {
    document.getElementById("demo").innerHTML = "Helooooo:>";
}
window.alert('Welcome');
function myTime() {
    document.getElementById("demo1").style.color = "dodgerblue";
    document.getElementById("demo1").innerHTML = Date();
}
function img() {
    document.getElementById('myImage').src = 'dog2.jpg';
}
function img2() {
    document.getElementById('myImage').src = 'dog1.jpg';
}
function add() {
    let x = 15;
    let y = 25;
    let z = x + y;
    document.getElementById("demo2").innerHTML = "The sum of x + y is: " + z;
}
function sub() {
    let a = 45;
    let b = 25;
    let c = a - b;
    document.getElementById("demo4").innerHTML = "The sub of a - b is: " + c;
}
function concate() {
    let text1 = "Karthika";
    let text2 = "Krishnan";
    let text3 = text1 + " " + text2;
    document.getElementById("demo3").innerHTML = text3;
}
function increement() {
    let d = 5;
    d++;
    let e = d;
    document.getElementById("demo5").innerHTML = e;
}
function exponent() {
    let f = 5;
    document.getElementById("demo6").innerHTML = f ** 2;
}
function spread() {
    let text = "12345";
    let min = Math.min(...text);
    let max = Math.max(...text);
    document.getElementById("demo7").innerHTML =
        "Minimum is: " + min + "<br>Maximum is: " + max;
}
function compare() {
    let t1 = 20;
    let t2 = 5;
    let result = t1 < t2;
    document.getElementById("demo8").innerHTML = " is 20  less than 5?  " + result;
}
function div_assign() {
    let g = 10;
    g /= 5;
    document.getElementById("demo9").innerHTML = g;
}
function drive() {
    let age = document.getElementById("ageInput").value;
    let text;
    if (age >= 18) {
        text = "You can drive!";
    }
    else{
        text="You cannot drive!";
    }
    document.getElementById("demo10").innerHTML = text;
}
function time() {
    const time = document.getElementById("timeInput").value;
    let greeting;
    if (time < 10) {
        greeting = "Good morning";
    } else if (time < 20) {
        greeting = "Good day";
    } else {
        greeting = "Good evening";
    }
    document.getElementById("demo11").innerHTML = greeting;
}
function age() {
    let age1 = document.getElementById("ageInput").value;
    let text1 = (age1 < 18) ? "Minor" : "Adult";
    document.getElementById("demo12").innerHTML=text1;
}
function rainbow(){
let color=document.getElementById("colorInput").value.toLowerCase();
let text;
switch (color) {
  case "violet":
    text = "Violet is in first position";
    break;
  case "indigo":
    text = "Indigo is in second position";
    break;
  case "blue":
    text = "Blue is in third position";
    break;
  case "green":
    text = "Green is in fourth position";
    break;
  case "yellow":
    text = "Yellow is in fifth position";
    break;
  case "orange":
    text = "Orange is in sixth position";
    break;
  case  "red":
    text = "Red is in seventh position";
}
document.getElementById("demo13").innerHTML = text;
}