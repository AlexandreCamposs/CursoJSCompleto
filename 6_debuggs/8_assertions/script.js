let arr = [1, 2, 3, 4, 5];
let arr2 = [];

function iterarArray(arr) {
  if (arr.length == 0) {
    throw new Error('O array deve ter pelo menos um elemento.');
  } else {
    for (i = 0; i < arr.length; i++) {
      console.log(i);
    }
  }
}

function arrayVazio(arr) {
  if (arr.length > 0) {
    throw Error('O array não pode ter elementos');
  } else {
    console.log('Deu certo.');
  }
}

// iterarArray(arr)
// iterarArray(arr2)

arrayVazio(arr);
arrayVazio(arr2);
