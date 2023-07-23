const colors = [0,0,0,0]
const btn = document.getElementById('btn')
const color = document.querySelector('.color')
var r = 0
var g = 0
var b = 0
var a = 0


function ChangeColor(){
    r = getRandomInt(255)
    g = getRandomInt(255)
    b = getRandomInt(255)

    document.body.style.backgroundColor = `rgb(${r}, ${g}, ${b})`;
    color.textContent = `rgb(${r}, ${g}, ${b})`;
}

function getRandomInt(max) {
  return Math.floor(Math.random() * max)
}

btn.addEventListener('click', ChangeColor);
