// window.addEventListener('load',()=>{
//   alert('Assine os nossos planos.')
// })

window.addEventListener('beforeunload', function(){
  event.returnValue = null
})