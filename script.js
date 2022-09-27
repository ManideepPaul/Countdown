// Flashy Border
const innerContainer = document.querySelector(".innerContainer");

// Display container
const midContainer = document.querySelector(".midContainer");

// Inputs
const minEl = document.querySelector(".min");
const secEl = document.querySelector(".sec");

// Displays
const minDis = document.querySelector(".minDis")
const secDis = document.querySelector(".secDis")

// Button
const button = document.querySelector(".submit");

button.addEventListener("click", submit);


// Will store input values
let minVal;
let secVal;

// Will store value with padStart to show on the display
let secPad;
let minPad;

// Will store converted input value to number
let minNumVal = 0;
let secNumVal = 0;

// Will store the setInterval
let interval;


function submit() {
    // Remove blink
    innerContainer.classList.remove("blink")

    // Assigning input value
    minVal = minEl.value;
    secVal = secEl.value;

    // Pop an alert if negative value found
    if (minVal.includes("-") || secVal.includes("-")) alert("No negative value please!!");

    // Pop an alert if bith the value is 0
    else if(minVal === '0' && secVal === '0') alert("Please set the time to start the Countdown!!")
    else {

        // Input value with padStart
        minPad = minVal.padStart(2, '0');
        secPad = secVal.padStart(2, '0');

        // Input converted to number
        minNumVal = Number(minEl.value);
        secNumVal = Number(secEl.value);

        // Setting value to display
        minDis.innerHTML = minPad;
        secDis.innerHTML = secPad;
        console.log(minVal, secVal)

        // This will convert user input to seconds and store total
        let animationDuration = (minNumVal * 60) + secNumVal;

        // Assigning rotate animation and setting animation duration according to the user input
        innerContainer.classList.add("rotate")
        innerContainer.style.animationDuration = `${animationDuration}s`

        // Assigning reverse animation and setting animation duration according to the user input
        midContainer.classList.add("reverse")
        midContainer.style.animationDuration = `${animationDuration}s`

        // Assigning setInterval
        interval = setInterval(() => startInterval(), 1000)
        
        // Setting input field to 0
        minEl.value = 0;
        secEl.value = 0;
    }
}

function startInterval() {
    if (secNumVal > 0) {
        // Reduce the sec value by one.
        secNumVal = secNumVal - 1;

        // Convert the sec value to string, add padStart and update on the page
        secPad = String(secNumVal).padStart(2, '0')
        secDis.innerText = secPad;
    }
    if (minNumVal > 0) {
        // Reduce the min value by one.
        minNumVal = minNumVal - 1;

        // Convert the min value to string, add padStart and update on the page
        minPad = String(minNumVal).padStart(2, '0');
        minDis.innerText = minPad;

        // Setting the sec value to 60 again
        secNumVal = 60;

        // Convert the new sec value to string, add padStart and update on the page
        secPad = String(secNumVal).padStart(2, '0')
        secDis.innerText = secPad;
    }

    // If the both sec and min in 0 then call removeInterval function
    if (secNumVal === 0 && minNumVal === 0) removeInterval()
}

function removeInterval() {

    // Add blink class and setting blink animation duration
    innerContainer.classList.add("blink");
    innerContainer.style.animationDuration = `.5s`

    // Clearing the setInterval
    clearInterval(interval);

    // Removing rotate animation and reverse rotation animation
    innerContainer.classList.remove("rotate")
    midContainer.classList.remove("reverse")
}

