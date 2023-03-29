let x = document.querySelector('.x');
console.log(x);
let o = document.querySelector('.o');
console.log(o);
let boxes = document.querySelectorAll('.box');
console.log(boxes);
let buttons = document.querySelectorAll('#container-buttons button');
console.log(buttons);
let messageContainer = document.querySelector('#message');
console.log(messageContainer);
let messageText = document.querySelector('#message p');
console.log(messageText);
let secondPlayer;
console.log(secondPlayer);

let player1 = 0;
let player2 = 0;

for (i = 0; i < boxes.length; i++) {
  boxes[i].addEventListener('click', () => {
    let el;
    if (player1 == player2) {
      el = x;
    } else {
      el = o;
    }
  });
}
