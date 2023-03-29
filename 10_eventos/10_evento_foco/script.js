let input = document.querySelector('input');
let input2 = document.querySelector('#input2');
console.log(input);
console.log(input2);

input.addEventListener('focus',()=>{
  console.log("Entrou no input 1")
})
input.addEventListener('blur',()=>{
  console.log("Saiu do input 1")
})



input2.addEventListener('focus',()=>{
  console.log("Entrou no input 2")
})

input2.addEventListener('blur',function(){
  console.log("Saiu do input 2")
})