let numbers = [];

function generateArray() {
    numbers = [];
    for (let i = 0; i < 5; i++){
        let randomNumbers = Math.floor(Math.random() * 100) + 1;
        numbers.push (randomNumber);
    }
}

let btn = document.getElementById('find-btn');
let result = document.getElementById('result');

btn.onclick =function () {
 generateArray();
 let largest = Math.max;
 result.textContent = "Numbers: " + numbers.join (",")
 " Largest: " + Largest;
}