function multiplicarTresValores(x, y, z) {
  return x * y * z;
}
console.log(multiplicarTresValores(3, 5, 6));

function somaValores(a, b) {
  return a + b;
}
console.log(somaValores(5, 3));

const valorSoma = somaValores(5, 5);
console.log("A soma da funcao valorSoma = " + valorSoma);

function podeDirigir(idade, cnh) {
  if (idade >= 18 && cnh == true) {
    console.log("Pode Dirigir");
  } else {
    console.log("Não pode dirigir");
  }
}

podeDirigir(18, false);
podeDirigir(18, true);
