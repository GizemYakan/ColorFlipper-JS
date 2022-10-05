const colors = ["Red", "Blue", "rgba(255, 0, 255)", "#FFFFCC"];
const colorChangeBtn = document.getElementById("color-change-btn");
const colorCodes = document.querySelector(".color-codes");

colorChangeBtn.addEventListener('click', function() {
    const randomNumber = getRandomNumber();
    document.body.style.backgroundColor = colors[randomNumber];
    colorCodes.textContent = colors[randomNumber];
});

function getRandomNumber() {
    return Math.floor(Math.random() * colors.length);
}