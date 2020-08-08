const elements = {
    days: document.getElementById("days"),
    hours: document.getElementById("hours"),
    minutes: document.getElementById("minutes"),
    seconds: document.getElementById("seconds"),
    countdown: document.getElementById("countdown"),
    year: document.getElementById("year"),
    loading: document.getElementById("loading"),
};

const currentYear = new Date().getFullYear();
const newYearTime = new Date(`January 01 ${currentYear + 1} 00:00:00`);
elements.year.textContent = newYearTime.getFullYear();

const updateCountdown = _ => {
    const { days, hours, minutes, seconds } = elements;

    const currentTime = new Date();

    const diff = newYearTime - currentTime;

    let [daysDate, hoursDate, minutesDate, secondsDate] = [
        Math.floor(diff / 1000 / 60 / 60 / 24),
        Math.floor(diff / 1000 / 60 / 60) % 24,
        Math.floor(diff / 1000 / 60) % 60,
        Math.floor(diff / 1000) % 60,
    ];

    let fullDate = [daysDate, hoursDate, minutesDate, secondsDate].map(num => (num < 10 ? `0${num}` : num));

    [days, hours, minutes, seconds].forEach((num, numIdx) => (num.textContent = fullDate[numIdx]));
};

setInterval(updateCountdown, 1000);

setTimeout(_ => {
    elements.loading.remove();
    elements.countdown.classList.add("show");
}, 1000);
