// Declare necessary variables
const decreaseBtn = document.querySelector("btn decrease");
const resetBtn = document.querySelector("btn reset");
const increaseBtn = document.querySelector("btn increase");
const counterValue = document.getElementById("value");
const btnContainer = document.querySelector(".button-container");

// Load Event Listeners
const loadEventListeners = () => {
    btnContainer.addEventListener('click', evaluateNumber);
}


// Evaluate Number Function
const evaluateNumber = (e) => {
    if (e.target === decreaseBtn) {
        console.log(counterValue);
    } else {
        
    }
}


// Call Event Listeners
loadEventListeners();