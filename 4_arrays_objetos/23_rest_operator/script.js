let num = 1;
let num1 = 14;
let num2 = 5;
let num3 = 4;

function imprimirValores(...args){
  for(i = 0; i < args.length; i++) {
    console.log(args[i])
  }
}

imprimirValores(num1,num,num3)
console.log("Pausa")
imprimirValores(num2,num1)
console.log("Pausa")
imprimirValores(2,285,6,3,5,)
console.log("Pausa")
