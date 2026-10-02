/*
Change this date to configure the countdown target.

Format:
YYYY-MM-DDTHH:MM:SS

Example:
December 31, 2026 at 11:59:59 PM


*/

const targetDate = new Date("2026-10-21T23:59:59");

// Get HTML elements
const daysElement = document.getElementById("days");
const hoursElement = document.getElementById("hours");
const minutesElement = document.getElementById("minutes");
const secondsElement = document.getElementById("seconds");
const messageElement = document.getElementById("message");

// Update countdown
function updateCountdown() {
const currentDate = new Date();

// Difference between target date and current date
const difference = targetDate - currentDate;

// Check if countdown has reached zero
if (difference <= 0) {
    daysElement.textContent = "00";
    hoursElement.textContent = "00";
    minutesElement.textContent = "00";
    secondsElement.textContent = "00";

    messageElement.textContent = "🎉 Countdown Finished!";

    // Stop the timer
    clearInterval(countdownInterval);

    return;
}

// Convert milliseconds into days, hours, minutes and seconds
const days = Math.floor(difference / (1000 * 60 * 60 * 24));

const hours = Math.floor(
    (difference % (1000 * 60 * 60 * 24)) /
    (1000 * 60 * 60)
);

const minutes = Math.floor(
    (difference % (1000 * 60 * 60)) /
    (1000 * 60)
);

const seconds = Math.floor(
    (difference % (1000 * 60)) /
    1000
);

// Update the DOM
daysElement.textContent = String(days).padStart(2, "0");
hoursElement.textContent = String(hours).padStart(2, "0");
minutesElement.textContent = String(minutes).padStart(2, "0");
secondsElement.textContent = String(seconds).padStart(2, "0");


}

// Run immediately
updateCountdown();

// Update every second
const countdownInterval = setInterval(updateCountdown, 1000);