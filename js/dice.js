// JavaScript Document
function roll() {
    const diceRoll =
        Math.floor(Math.random() * 6+1);
    let rollArea = document.getElementById("Roll");
    rollArea.innerHTML = diceRoll;
}