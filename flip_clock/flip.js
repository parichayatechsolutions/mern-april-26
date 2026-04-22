function updateTime() {
    const now = new Date();
    const date = now.getDate();
    const month = now.getMonth() + 1;
    const year = now.getFullYear();
    const hour = now.getHours();
    const min = now.getMinutes();
    const sec = now.getSeconds();
    const daynum = now.getDay();
    const ampm = now.getHours() >= 12 ? "PM" : "AM";
    document.getElementById("date").innerHTML = date;
    document.getElementById("month").innerHTML = month;
    document.getElementById("year").innerHTML = year;
    document.getElementById("hour").innerHTML = hour;
    document.getElementById("min").innerHTML = min;
    document.getElementById("sec").innerHTML = sec;
    document.getElementById("am_pm").innerHTML = ampm;
    switch (daynum) {
        case 0:
            dayName = "Sunday";
            break;
        case 1:
            dayName = "Monday";
            break;
        case 2:
            dayName = "Tuesday";
            break;
        case 3:
            dayName = "Wednesday";
            break;
        case 4:
            dayName = "Thursday";
            break;
        case 5:
            dayName = "Friday";
            break;
        case 6:
            dayName = "Saturday";
            break;
        default:
            dayName = "Unknown";
    }
    document.getElementById("dn").innerHTML = dayName;
}
function startClock() {
    setInterval(updateTime, 1000);
}
startClock();

function changeTheme(theme) {
    console.log(theme);
    
    if (theme === "dark") {
        document.body.className = "dark";
    }
    else if (theme === "light") {
        document.body.className = "light";
    }
}