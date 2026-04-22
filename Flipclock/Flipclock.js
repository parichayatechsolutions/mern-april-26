function clock() {
    const now = new Date();
    const hours = now.getHours();
    const minutes = now.getMinutes();
    const seconds = now.getSeconds();
    const day = now.getDate();
    const month = now.getMonth();
    const year = now.getFullYear();
    const dayOfWeek = now.getDay();
    const ampm = hours >= 12 ? 'PM' : 'AM';

    document.getElementById('hh').innerHTML = hours.toString().padStart(2, '0');
    document.getElementById('min').innerHTML = minutes.toString().padStart(2, '0');
    document.getElementById('sec').innerHTML = seconds.toString().padStart(2, '0');
    document.getElementById('ss').innerHTML = seconds.toString().padStart(2, '0');
    document.getElementById('dd').innerHTML = day.toString().padStart(2, '0');
    document.getElementById('mm').innerHTML = month.toString().padStart(2, '0');
    document.getElementById('yy').innerHTML = year.toString().padStart(4, '0');
    document.getElementById('ampm').innerHTML = ampm;
    switch (dayOfWeek) {
        case 0:
            document.getElementById('ww').innerHTML = 'Sunday';
            break
        case 1:
            document.getElementById('ww').innerHTML = 'Monday';
            break;
        case 2:
            document.getElementById('ww').innerHTML = 'Tuesday';
            break;
        case 3:
            document.getElementById('ww').innerHTML = 'Wednesday';
            break;  
        case 4:
            document.getElementById('ww').innerHTML = 'Thursday';
            break;
        case 5:
            document.getElementById('ww').innerHTML = 'Friday';
            break;
        case 6:
            document.getElementById('ww').innerHTML = 'Saturday';
        default:
            document.getElementById('ww').innerHTML = '';
    }
}

const clockInterval = setInterval(updateClockandDate, 1000);
function stopClock() {
    clearInterval(clockInterval);
}
updateClockandDate();