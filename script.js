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

let interval;

// min.addEventListener("change", (value) => getInput(value))

function submit() {
    // Remove blink
    innerContainer.classList.remove("blink")

    // Input value
    minVal = minEl.value;
    secVal = secEl.value;

    if (minVal.includes("-") || secVal.includes("-")) alert("No negative value please!!")
    else if(minVal === '0' && secVal === '0') alert("Please set the time to start the Countdown!!")
    else {

        // Input value with padStart
        minPad = minVal.padStart(2, '0');
        secPad = secVal.padStart(2, '0');

        // Input converted to number
        minNumVal = Number(minEl.value);
        secNumVal = Number(secEl.value);

        minDis.innerHTML = minPad;
        secDis.innerHTML = secPad;
        console.log(minVal, secVal)

        let animationDuration = (minNumVal * 60) + secNumVal;

        innerContainer.classList.add("rotate")
        innerContainer.style.animationDuration = `${animationDuration}s`

        midContainer.classList.add("reverse")
        midContainer.style.animationDuration = `${animationDuration}s`

        interval = setInterval(() => startInterval(), 1000)
        
        minEl.value = 0;
        secEl.value = 0;
    }

}

function startInterval() {
    // if(secNumVal === 0) clearInterval(interval)
    if (secNumVal > 0) {
        secNumVal = secNumVal - 1;
        // console.log(secNumVal)
        secPad = String(secNumVal).padStart(2, '0')
        secDis.innerText = secPad;
    }
    if (minNumVal > 0) {
        minNumVal = minNumVal - 1;
        console.log("here")
        minPad = String(minNumVal).padStart(2, '0');
        minDis.innerText = minPad;

        secNumVal = 60;
        secPad = String(secNumVal).padStart(2, '0')
        secDis.innerText = secPad;
    }
    if (secNumVal === 0 && minNumVal === 0) removeInterval()
}

function removeInterval() {
    innerContainer.classList.add("blink");
    innerContainer.style.animationDuration = `.5s`
    clearInterval(interval);

    innerContainer.classList.remove("rotate")
    // innerContainer.style.animationDuration = `${animationDuration}s`

    midContainer.classList.remove("reverse")
    // midContainer.style.animationDuration = `${animationDuration}s`
}

// function getInput(value) {
//     console.log(value)
// }