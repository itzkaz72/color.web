// JavaScript Document
function randHex() {
    const randColr =
        Math.floor(Math.random() * 16777215).toString(16);
    var randArea = document.getElementById("randArea");
    var colrDisplay = document.getElementById("Colr");
    randArea.style.backgroundColor = "#" + randColr;
    colrDisplay.innerHTML = "#" + randColr;
}
window.onload = randHex;