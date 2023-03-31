let x = document.querySelector('.x');
let o = document.querySelector('.o');
let boxes = document.querySelectorAll('.box');
let buttons = document.querySelectorAll('#container-buttons button');
let messageContainer = document.querySelector('#message');
let messageText = document.querySelector('#message p');
let secondPlayer;

//contador de jogadas
let player1 = 0;
let player2 = 0;

//adiciona evento de click aos boxes
for (i = 0; i < boxes.length; i++) {
  //quando alguém clicar na boxes
  boxes[i].addEventListener('click', function () {
    let el = checkEl(player1, player2);

    //verifica se a caixa ja foi clicada e tem algum elemento x ou o
    if (this.childNodes.length == 0) {
      let cloneEl = el.cloneNode(true); //clone o elemento
      this.appendChild(cloneEl); //insere o elemento

      //computa a jogada e alterna o jogador
      if (player1 == player2) {
        player1++;
      } else {
        player2++;
      }
      //checa quem ganhou
      checkWin();
    }
  });
}

//ver quem vai jogar
function checkEl(player1, player2) {
  if (player1 == player2) {
    el = x;
  } else {
    el = o;
  }
  return el;
}

//ver quem ganhou
function checkWin() {
  let b1 = document.querySelector('#block-1');
  let b2 = document.querySelector('#block-2');
  let b3 = document.querySelector('#block-3');
  let b4 = document.querySelector('#block-4');
  let b5 = document.querySelector('#block-5');
  let b6 = document.querySelector('#block-6');
  let b7 = document.querySelector('#block-7');
  let b8 = document.querySelector('#block-8');
  let b9 = document.querySelector('#block-9');

  //horrizontal
  if(b1.childNodes.length > 0 && b2.childNodes.length > 0 && b3.childNodes.length > 0){
    let b1Child = b1.childNodes[0].className;
    let b2Child = b2.childNodes[0].className;
    let b3Child = b3.childNodes[0].className;

    if(b1Child == 'x' && b2Child == 'x' && b3Child == 'x'){
      winner('x')
    }else if(b1Child == 'o' && b2Child == 'o' && b3Child == 'o'){
      winner('o')
    }
  }

  if(b4.childNodes.length > 0 && b5.childNodes.length >0 && b6.childNodes.length >0){
    let b4Child = b4.childNodes[0].className;
    let b5Child = b5.childNodes[0].className;
    let b6Child = b6.childNodes[0].className;
    if(b4Child == 'x' && b5Child == 'x' && b6Child == 'x'){
      winner('x')
    }else if(b4Child = 'o' && b5Child == 'o' && b6Child == 'o'){
      winner('o')
    }
  }

  if( b7.childNodes.length > 0 && b8.childNodes.length > 0 && b9.childNodes.length > 0){
    let b7Child = b7.childNodes[0].className;
    let b8Child = b8.childNodes[0].className;
    let b9Child = b9.childNodes[0].className;
    if(b7Child == 'x' && b8Child == 'x' & b9Child == 'x'){
      winner('x')
    }else if(b7Child == 'o' && b8Child == 'o' && b9Child == 'o'){
      winner('o')
    }
  }
  //vertical
  if(b1.childNodes.length > 0 && b4.childNodes.length > 0 && b7.childNodes.length >0){
    let b1Child = b1.childNodes[0].className;
    let b4Child = b4.childNodes[0].className;
    let b7Child = b7.childNodes[0].className;
    if(b1Child == 'x' && b4Child == 'x' && b7Child == 'x'){
     winner('x')
    }else if(b1Child == 'o' && b4Child == 'o' && b7Child == 'o'){
        winner('o')
    }
  }

  if(b2.childNodes.length > 0 && b5.childNodes.length > 0 && b8.childNodes.length > 0 ){
    let b2Child = b2.childNodes[0].className;
    let b5Child = b5.childNodes[0].className;
    let b8Child = b8.childNodes[0].className;
    if(b2Child == 'x' && b5Child == 'x' && b8Child == 'x'){
     winner('x')
    }else if(b2Child == 'o' && b5Child == 'o' && b8Child == 'o'){
        winner('o')
    }
  }

  if( b3.childNodes.length >0 && b6.childNodes.length > 0 && b9.childNodes.length > 0){
    let b3Child = b3.childNodes[0].className;
    let b6Child = b6.childNodes[0].className;
    let b9Child = b9.childNodes[0].className
    if(b3Child == 'x' && b6Child == 'x' && b9Child == 'x'){
     winner('x')
    }else if(b3Child == 'o' && b6Child == 'o' && b9Child == 'o'){
        winner('o')
    }
  }
  //diagonal
  if(b1.childNodes.length > 0 && b5.childNodes.length > 0 && b9.childNodes.length > 0){
    let b1Child = b1.childNodes[0].className;
    let b5Child = b5.childNodes[0].className;
    let b9Child = b9.childNodes[0].className;

    if(b1Child == 'x' && b5Child == 'x' && b9Child == 'x'){
     winner('x')
    }else if(b1Child == 'o' && b5Child == 'o' && b9Child == 'o'){
        winner('o')
    }
  }
  if(b7.childNodes.length > 0 && b5.childNodes.length > 0 && b3.childNodes.length > 0){
    let b7Child = b7.childNodes[0].className;
    let b5Child = b5.childNodes[0].className;
    let b3Child = b3.childNodes[0].className;
    if(b7Child == 'x' && b5Child == 'x' && b3Child == 'x'){
     winner('x')
    }else if(b7Child == 'o' && b5Child == 'o' && b3Child == 'o'){
      winner('o')
    }
  }

  //deu velha

let counter = 0;

for(i = 0; i < boxes.length; i++){
  if(boxes[i].childNodes[0] != undefined)
  counter++
}

if(counter == 9){
  winner('Deu velha')
}

}

function winner(winner){
  let scoreboarX = document.querySelector('#scoreboard-1');
  let scoreboarY = document.querySelector('#scoreboard-2');  
  let msg = '';

  if(winner == 'x'){
    scoreboarX.textContent = parseInt(scoreboarX.textContent) + 1;
    msg = 'O jogador  1 venceu!'
  }else if(winner == 'o'){
    scoreboarY.textContent = parseInt(scoreboarY.textContent) + 1;
    msg = 'O jogador  2 venceu!'
  }else{
   msg = 'Deu velha'
  }
  //exibe msg
  messageText.innerHTML = msg;
  messageContainer.classList.remove("hide")

  //esconde msg
  setTimeout(function(){
    messageContainer.classList.add('hide')
  },1000)
  
}
