let btn1 = document.querySelector('.btn1');
btn1.style.color = 'blue';

let btn2 = document.querySelector('.btn2')

function msg() {
  console.log('Clicou botão 1');
}

btn1.addEventListener('click', msg);

btn2.addEventListener('click', () => {
  btn1.removeEventListener('click', msg);
  console.log('Clicou botão 2')
});
