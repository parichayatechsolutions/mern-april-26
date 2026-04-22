function updateClockandDate() {
    const now = new Date();
    const hours = now.getHours();
    const minutes = now.getMinutes();
    const seconds = now.getSeconds();
    const day = now.getDate();
    const month = now.getMonth() + 1;
    const year = now.getFullYear();
    const dayOfWeek = now.getDay();
    console.log(`Current time: ${hours}:${minutes}:${seconds}`);
    const ampm = hours >= 12 ? 'PM' : 'AM';
console.log(seconds.toString().padStart(2, '0'));
    document.getElementById('hour').innerHTML = hours.toString().padStart(2, '0');
    document.getElementById('min').innerHTML =  `<div class="${seconds.toString().padStart(2, '0') === '00' ? 'animate__animated animate__flipInX' : ''}">${minutes.toString().padStart(2, '0')}</div>` ;
    document.getElementById('sec').innerHTML = seconds.toString().padStart(2, '0');
    document.getElementById('sec').innerHTML = seconds.toString().padStart(2, '0');
    document.getElementById('day').innerHTML = day.toString().padStart(2, '0');
    document.getElementById('month').innerHTML = month.toString().padStart(2, '0');
    document.getElementById('year').innerHTML = year.toString().padStart(4, '0');
    document.getElementById('ampm').innerHTML = ampm;
    switch (dayOfWeek) {
        case 0:
            document.getElementById('dayOfWeek').innerHTML = 'Sunday';
            break
        case 1:
            document.getElementById('dayOfWeek').innerHTML = 'Monday';
            break;
        case 2:
            document.getElementById('dayOfWeek').innerHTML = 'Tuesday';
            break;
        case 3:
            document.getElementById('dayOfWeek').innerHTML = 'Wednesday';
            break;  
        case 4:
            document.getElementById('dayOfWeek').innerHTML = 'Thursday';
            break;
        case 5:
            document.getElementById('dayOfWeek').innerHTML = 'Friday';
            break;
        case 6:
            document.getElementById('dayOfWeek').innerHTML = 'Saturday';
        default:
            document.getElementById('dayOfWeek').innerHTML = '';
    }
}

const clockInterval = setInterval(updateClockandDate, 1000);
function stopClock() {
    clearInterval(clockInterval);
}
updateClockandDate();
// stopClock()