// Escreva uma função que recebe uma string;
// Se o texto conter mais de 10 caracteres imprima “Texto muito longo”;
// Se conter menos, imprima “Texto dentro do limite”;


function checarTexto(texto){
  if(texto.length > 10 ) {
    console.log("Texto muito longo")
  }else{
    console.log("Texto dentro do limite")
  }
  console.log(texto.length)
}

checarTexto('alexandress')
checarTexto('alexandre')