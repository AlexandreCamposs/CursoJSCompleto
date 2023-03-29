let btn1 = document.querySelector('#btn1');
btn1.style.color = 'red';
let btn2 = document.querySelector('#btn2');
console.log(btn2);
btn2.style.color = 'blue';
let p = document.querySelector('p')
console.log(p)


function msg(e) {
  console.log('clicou no botão');
  e.stopPropagation();
}

btn1.addEventListener('click', msg);

btn2.addEventListener('click', () => {
  btn1.removeEventListener('click', msg);
  console.log('Clicou e removeu evento do botão');
});

p.addEventListener('click',()=>{
  console.log("Clicou no paragrafo")
})