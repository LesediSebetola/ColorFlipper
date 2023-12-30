
 //declaring variables
const colors = ["green", "red", "blue", "yellow", "purple", "white", "brown", "orange"];
const btn = document.getElementById('btn');
const color = document.querySelector(".colors");

btn.addEventListener('click', function(){
    const randomNumber = getRandomNumber();
    console.log(randomNumber);

    document.body.style.backgroundColor = colors[randomNumber];
    color.textContent = colors[randomNumber]
})

function getRandomNumber() {
    return Math.floor(Math.random() * colors.length);
}