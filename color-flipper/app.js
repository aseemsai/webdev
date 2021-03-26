const colors = ["green", "red", "rgba(133,122,200)", "#F15025"];

const btn = document.getElementById("btn");
const color = document.querySelector(".color");

// Add Event Listener on the btn id button
btn.addEventListener('click', function () {

    // Get random number between 0-3
    const randomNumber = getRandomNumber();
    document.body.style.backgroundColor = colors[randomNumber];
    color.textContent = colors[randomNumber];
});

function getRandomNumber() {
    return Math.floor(Math.random() * colors.length);
}