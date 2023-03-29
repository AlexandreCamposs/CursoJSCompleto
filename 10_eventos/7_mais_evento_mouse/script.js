let botao = document.querySelector('#btn1');
console.log(botao);
let botao2 = document.querySelector('#btn2');
console.log(botao2);

botao.addEventListener('mousedown',()=>{
  console.log('clicou com o mouse')
})
botao.addEventListener('mouseup',()=>{
  console.log('Soltou o mouse')
})

// botao.addEventListener('dblclick',()=>{
//   console.log("Clicou duas vezes")
// })


botao2.addEventListener('contextmenu',(e)=>{
  e.preventDefault();
  console.log("Clicou com o botão direito")
})

