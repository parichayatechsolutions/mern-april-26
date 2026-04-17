
function myFunction() {
    window.alert('Do not panic its a alert message');
    document.getElementById("demo").innerHTML = "Welcome to Javascript!";
}
function function1() {
    document.getElementById("de").style.fontSize = "35px";
    document.getElementById("de").innerHTML = "Font Changed";
}
function image() {
    document.getElementById('image').src = './nocolor.jpg';
}
function image1() {
    document.getElementById('image').src = './color.jpg';
}
function add() {
    let a = 10;
    let b = 25;
    let c = b + a;
    document.getElementById("sum").style.color = "black";
    document.getElementById("sum").innerHTML = "The sum value is : " + c;
}
function sub() {
    let a = 10;
    let b = 25;
    let c = b - a;
    document.getElementById("sub").style.color = "black";
    document.getElementById("sub").innerHTML = "The difference value is : " + c;
}
function multi() {
    let a = 10;
    let b = 25;
    let d = b * a;
    document.getElementById("multi").style.color = "black";
    document.getElementById("multi").innerHTML = "The product value is : " + d;
}
function div() {
    let a = 10;
    let b = 25;
    let d = b / a;
    document.getElementById("div").style.color = "coral";
    document.getElementById("div").innerHTML = "The value is : " + d;
}
function exp() {
    let a = 10;
    let d = Math.pow(a, 2);
    document.getElementById("exp").style.color = "black";
    document.getElementById("exp").innerHTML = "The exponential value is : " + d;
}
function mod() {
    let a = 10;
    let b = 3
    let d = a % b;
    document.getElementById("mod").style.color = "black";
    document.getElementById("mod").innerHTML = "The exponential value is : " + d;
}
function str() {
    let t1 = "_New";
    let t2 = "Tag_";
    let t3 = t1 + " " + t2;
    document.getElementById("str").style.color = "black";
    document.getElementById("str").innerHTML = "The result : " + t3;
}
function equ() {
    let t1 = "_New";
    t1 += " Tag_";
    document.getElementById("equ").style.color = "black";
    document.getElementById("equ").innerHTML = "The result : " + t1;
}
function to() {
    let t = 34;
    document.getElementById("to").style.color = "black";
    document.getElementById("to").innerHTML = "The result : " + (t == 34);
}
function to1() {
    let t = 34;
    document.getElementById("to1").style.color = "black";
    document.getElementById("to1").innerHTML = "The result : " + (t === "34");
}
function com() {
    let t1 = "A";
    let t2 = "_";
    let t3 = t1 < t2;
    document.getElementById("com").style.color = "black";
    document.getElementById("com").innerHTML = "The result : " + t3;
}
function checkEligibility() {
    const age = Number(document.getElementById("userAge").value);
    if (age >= 18) {
        document.getElementById("result").innerHTML = "You are eligible for a driving license.";
        document.getElementById("result").style.color = "green";
    } else {
        document.getElementById("result").innerHTML = "You are not eligible for a driving license.";
        document.getElementById("result").style.color = "red";
    }
}
function checkstatus() {
    let p = Number(document.getElementById("price").value);
    let count = p ? null : 20;
    let total = p * count;
    document.getElementById("res").innerHTML = "The price is " + total;
}