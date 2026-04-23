function clock() {
    const now = new Date();
    const hour = now.getHours();
    const minutes = now.getMinutes();
    const seconds = now.getSeconds();
    const day = now.getDate();
    const month = now.getMonth()+1;
    const year = now.getFullYear();
    const ww = now.getDay();
    const ampm = hour >= 12 ? 'PM' : 'AM';

    document.getElementById('hh').innerHTML = hour;
    document.getElementById('min').innerHTML =`<div class="${minutes === '00' ? 'animate__animated animate__flipInX' :'animate__animated animate__flipInX' }">${minutes.toString().padStart(2, '0')}</div>` ;
    document.getElementById('sec').innerHTML = seconds;
    document.getElementById('dd').innerHTML = day;
    document.getElementById('mm').innerHTML = month;
    document.getElementById('yy').innerHTML = year;
    document.getElementById('ampm').innerHTML = ampm;
    let wname;
    switch (ww) {
        case 0:
            wname = 'Sunday';
            break
        case 1:
            wname = 'Monday';
            break;
        case 2:
            wname = 'Tuesday';
            break;
        case 3:
           wname = 'Wednesday';
            break;  
        case 4:
            wname = 'Thursday';
            break;
        case 5:
            wname = 'Friday';
            break;
        case 6:
            wname = 'Saturday';
        default:
            wname = '';
    }
    document.getElementById('ww').innerHTML = wname;
}

const clockInterval = setInterval(clock, 1000);
function stopClock() {
    clearInterval(clockInterval);
}
//updateClock();
