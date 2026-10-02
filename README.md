⏳ Countdown Timer

A simple and responsive Countdown Timer built using HTML5, CSS3, and JavaScript.

The timer counts down to a specific target date and displays the remaining days, hours, minutes, and seconds. When the countdown reaches zero, a completion message is displayed and the timer automatically stops.

🚀 Features

Displays remaining days, hours, minutes, and seconds

Updates automatically every second

Target date can be configured easily in JavaScript

Displays a message when the countdown reaches zero

Automatically clears the timer when finished

Responsive design for desktop and mobile devices

Clean and modern user interface

🛠️ Technologies Used

HTML5 – Structure of the webpage

CSS3 – Styling and responsive design

JavaScript – Countdown logic, Date calculations, and DOM updates

📁 Project Structure
countdown-timer/
│
├── index.html
├── style.css
├── script.js
└── README.md

⚙️ How It Works

The project calculates the difference between the current date and the configured target date.

const targetDate = new Date("2026-10-21T23:59:59");


The difference is calculated in milliseconds:

const difference = targetDate - currentDate;


The milliseconds are then converted into:

Days

Hours

Minutes

Seconds

The display is updated every second using:

setInterval(updateCountdown, 1000);


When the countdown reaches zero, the interval is stopped using:

clearInterval(countdownInterval);

🎯 How to Use
1. Clone or download the project

Download the project files to your computer.

2. Open the project

Make sure the following files are in the same folder:

index.html
style.css
script.js

3. Configure the target date

Open script.js and change the target date:

const targetDate = new Date("2026-10-21T23:59:59");


For example:

const targetDate = new Date("2027-01-01T00:00:00");

4. Run the project

Open index.html in any modern web browser.

No server or additional dependencies are required.

📱 Responsive Design

The countdown timer is designed to work on:

💻 Desktop

💻 Laptop

📱 Mobile

📱 Tablet

📚 Concepts Practiced

This project is useful for practicing the following JavaScript concepts:

Date objects

Date and time calculations

Millisecond conversion

setInterval()

clearInterval()

DOM manipulation

textContent

Conditional statements

Functions

Responsive CSS

📝 Example

For a target date of:

October 21, 2026 at 11:59:59 PM


The timer will display something similar to:

        Countdown Timer

      Time remaining until the target date

     19       12       35       48
    Days     Hours    Minutes  Seconds



Once the timer reaches zero:

🎉 Countdown Finished!

🔮 Possible Improvements

Some features that could be added in the future:

Allow users to select the target date from the UI

Add a date and time picker

Add pause/resume functionality

Add multiple countdown timers

Add sound or animation when the countdown ends

Save the target date using localStorage

Add different themes

📖 References

MDN Web Docs – JavaScript Date

MDN Web Docs – setInterval()

MDN Web Docs – DOM Manipulation

