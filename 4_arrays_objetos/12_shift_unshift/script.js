let frutas = ["maça","pera","morango"]

let removeFrutas = frutas.shift();
console.log(removeFrutas);
console.log(frutas);

frutas.unshift("Banana")
console.log(frutas)

let novaFruta = frutas.unshift("melancia")
console.log(novaFruta)
console.log(frutas[3])