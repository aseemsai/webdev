// Declare necessary variables
const counterValue = document.getElementById("value");
const btns = document.querySelectorAll(".btn");

// Set initial count
let count = 0;

btns.forEach((item) => {
    item.addEventListener('click', evaluateCounter);
});

function evaluateCounter(e) {
    const targetClasses = e.currentTarget.classList;
    if (targetClasses.contains("decrease")) {
        count--;
    } else if (targetClasses.contains("reset")) {
        count = 0;
    } else {
        count++;
    }

    counterValue.textContent = count;
    setCountColor();
}

function setCountColor() {
    if (count < 0) {
        counterValue.style.color = 'var(--clr-red-dark)';
    } else if (count === 0) {
        counterValue.style.color = 'var(--clr-grey-1)';
    } else {
        counterValue.style.color = 'var(--clr-green-dark)';
    }
}