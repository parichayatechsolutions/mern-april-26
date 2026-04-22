function updateDateTime() {
    const now = new Date();
    const date = now.getDate();
    const month = now.getMonth() + 1;
    const year = now.getFullYear();
    const dnum = now.getDay();
    const hrs = now.getHours();
    const mins = now.getMinutes();
    const sec = now.getSeconds();
    const ampm = hrs >= 12 ? "PM" : "AM";
    document.getElementById("d").innerHTML = date;
    document.getElementById("month").innerHTML = month;
    document.getElementById("year").innerHTML = year;

    document.getElementById("hrs").innerHTML = hrs;
    document.getElementById("mins").innerHTML = mins;
    document.getElementById("sec").innerHTML = sec;
    document.getElementById("am-pm").innerHTML = ampm;
    
    switch (dnum) {
        case 0:
            dName = "Sunday";
            break;
        case 1:
            dName = "Monday";
            break;
        case 2:
            dName = "Tuesday";
            break;
        case 3:
            dName = "Wednesday";
            break;
        case 4:
            dName = "Thursday";
            break;
        case 5:
            dName = "Friday";
            break;
        case 6:
            dName = "Saturday";
            break;
        default:
            dName = " ";

    }
    document.getElementById("day").innerHTML = dName;

}
function startClock() {
    setInterval(updateDateTime, 1000);
}
startClock();

function changeTheme(theme){
    let theme=document.getElementById("themeColor").value;
    if(theme==dark){
        document.getElementsByClassName("dark").innerHTML;
    }
    if(theme==light){
        document.getElementsByClassName("light").innerHTML;
    }
}