const daysE = document.getElementById("days");
const hrs = document.getElementById("hours");
const mins = document.getElementById("mins");
const secs = document.getElementById("secs");
const timeBlock = document.querySelector(".countdown__time-block");

const updateCountDown = () => {
    const now = new Date();
    const targetDate = new Date("2025-12-31T23:59:59");
    const diff = targetDate - now;

    const days = Math.floor(diff/(1000 * 60 * 60 * 24));

    const hours = Math.floor(diff/(1000 * 60 * 60) % 24);

    const minutes = Math.floor(diff / (1000 * 60) % 60);

    const seconds = Math.floor(diff / (1000) % 60);

    // console.log(now, targetDate, diff, days, hours, minutes, seconds);

    // Update the Dom
    daysE.textContent = days;
    hrs.textContent = hours;
    mins.textContent = minutes;
    secs.textContent = seconds;

    // Terminate the timer when the time is reached
    if (diff <= 0){
        timeBlock.innerHTML = `<h2>Time is exhausted</h2>`;
        clearInterval(timer);
        return;
    }
}

const timer = setInterval(updateCountDown, 1000); //Dynamically update the time every 1s.


 /* Try this:
 
    const formatTime = (time) => (time < 10 ? `0${time}` : time);

    daysE.textContent = formatTime(days);
    hrs.textContent = formatTime(hours);
    mins.textContent = formatTime(minutes);
    secs.textContent = formatTime(seconds); */