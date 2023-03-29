let btn = document.querySelector('.btn');
console.log(btn)
btn.style.color = 'red'


btn.addEventListener("click",()=>{
  console.log('clicou')
  if('click'){
    alert("Clicou no botão")
  }
})
