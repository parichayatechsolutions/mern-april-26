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
    document.getElementById("mins").innerHTML =`<div class="${sec.toString().padStart(2, '0')=== '00' ? 'animate__animated animate__flipInX' : ''}">${mins.toString().padStart(2, '0')}</div>`;
    document.getElementById("sec").innerHTML = `<div class='animate__animated animate__heartbeat'>${sec.toString().padStart(2,'0')}</div>`;
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
    if(theme=="dark"){
        document.body.className="dark";
    }
    else if(theme=="light"){
        document.body.className="light";
    }
}