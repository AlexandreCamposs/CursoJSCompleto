// Nas async functions, podemos determinar uma instrução await;
// Que vai esperar uma promise ser resolvida, para apresentar os resultados;
function somarComDeley(a, b) {
  return new Promise((resolve) => {
    setTimeout(function () {
      resolve(a + b);
    }, 2000);
  });
}

async function resSoma(a, b, c) {
  let x = somarComDeley(a, b);
  let y = c;
  return (await x) + y;
}

resSoma(1,2,3).then(values=> console.log(values))
