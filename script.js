const daysE1 = document.getElementById("days");
const hoursE1 = document.getElementById("hours");
const minsE1 = document.getElementById("mins");
const secondsE1 = document.getElementById("seconds");

const newYears = '1 jan 2023';

function countdown(){
    const newYearsDate = new Date(newYears);
    const currentDate = new Date();

    const totalSeconds = (newYearsDate - currentDate)  / 1000;

    const days = Math.floor(totalSeconds/3600 / 24);

    const hours = Math.floor(totalSeconds/3600) % 24;

    const mins = Math.floor(totalSeconds / 60) % 60;

    const seconds = Math.floor(totalSeconds) % 60;

    // console.log(days , hours , mins , seconds)


    daysE1.innerHTML = days;
    hoursE1.innerHTML = formatTime(hours);
    minsE1.innerHTML = formatTime(mins);
    secondsE1.innerHTML = formatTime(seconds);


    // The Second Method to retrieve output
    // document.getElementById("days").innerHTML = days;
    // document.getElementById("hours").innerHTML = hours;
    // document.getElementById("mins").innerHTML = mins ;
    // document.getElementById("seconds").innerHTML = seconds ;
}

function formatTime(time) {
    return time < 10 ? `0${time}` : time;
}


countdown();

setInterval(countdown ,1000);




