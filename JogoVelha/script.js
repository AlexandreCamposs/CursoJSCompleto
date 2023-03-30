let x = document.querySelector('.x');
let o = document.querySelector('.o');
let boxes = document.querySelectorAll('.box');
let buttons = document.querySelectorAll('#container-buttons button');
let messageContainer = document.querySelector('#message');
let messageText = document.querySelector('#message p');
let secondPlayer;


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

    let cloneEl = el.cloneNode(true);
    console.log(cloneEl)
    this.appendChild(cloneEl)

    
    if (player1 == player2) {
      player1++;
    } else {
      player2++;
    }
  });
}
