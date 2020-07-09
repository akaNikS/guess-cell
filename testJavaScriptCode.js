// Угадай ячейку
let table = document.querySelector('#table');

let counter = 1;
for (let i = 0; i < 10; i++) {
 let tr = document.createElement('tr');
 for (let i = 0; i < 10; i++) {
  let td = document.createElement('td');
  td.innerHTML = counter;
  counter++;
  tr.appendChild(td);
 }
 table.appendChild(tr);
}

let randomNums = [];
for (let i = 1; randomNums.length < 10; i++) {
 let randomNum = Math.ceil(100 * Math.random());
 if (!randomNums.includes(randomNum)) {
  randomNums.push(randomNum);
 }
}
console.log(randomNums);

let guessedNumbers = [];
table.addEventListener('click', function (event) {
if (randomNums.includes(+event.target.innerHTML)) {
 event.target.classList.add('coloredGreen');
 guessedNumbers.push(event.target.innerHTML);
} else {
 event.target.classList.add('coloredRed');
}
if (randomNums.length === guessedNumbers.length) {
 alert('Вы выйграли!');
}
})

let timer = document.querySelector('#timer');
let timerID = setInterval(function () {
 let seconds = +timer.innerHTML;
 if (seconds > 0) {
  timer.innerHTML = seconds - 1;
 } else {
  clearInterval(timerID);
  alert('Вы проиграли');
 }
}, 1000)

