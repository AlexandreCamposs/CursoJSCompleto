// Escreva uma função que detecta o tipo de dado passado;
// Verifque se é um: number, boolean ou string
// E retorne uma mensagem para cada tipo;
// Execute uma função para cada caso;

function imprimirType(type) {
  if (typeof type === 'string' ) {
    console.log('O dado verificado   é uma string');
    } else if (typeof type === 'number') {
      console.log('O dado verificado foi number');
    } else if(typeof type === 'boolean') {
      console.log('O dado verificado é boolean' );
    }
  }


imprimirType(23)
imprimirType('teste')
imprimirType(true)
