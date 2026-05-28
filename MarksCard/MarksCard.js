console.log("script linked")
console.error("script linked")


setTimeout(() => {

}, 1000)

function displayTime() {
    document.getElementById('demo').innerHTML = Date()
    console.log(document.getElementById('demo'))
}

function displayTimeByClass() {
    document.getElementById('demo').innerHTML = Date();
    document.getElementById('demo').style.fontSize = "35px";
    document.getElementById('demo').style.color = "red";
    console.log(document.getElementsByClassName('demo1'))
    document.getElementsByClassName('demo1')[0].textContent = Date()
    document.getElementsByClassName('demo1')[1].textContent = "testing demo1"
    //    const classNames =  document.getElementsByClassName('demo')[0].textContent = Date()

}

function add(){
    let a = 10;
    let b = 20;
    let c = a + b;
    console.log(typeof(c))
    console.log(c)

    let name = "Lathesh"
    console.log(typeof(name))
    console.log(name)

    let name2 = ["Lathesh","Karthika","Lakshmi"]
    console.log(typeof(name2))
    console.log(name2)

let name3 = {
    name:"Lathesh",
    age:23,
    emails:["l@gmail.com","a@gmail.com"]
}
    console.log(typeof(name3))
    console.log(name3.name.length)
    console.log(name3.age)
    console.log(name3.emails)

    document.getElementById('demo').innerHTML = name;

}