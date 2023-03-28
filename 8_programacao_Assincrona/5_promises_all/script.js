// Com o método all, podemos resolver várias promessas de uma vez só;
// Ou seja passamos elas por array e quando a última for resolvida, receberemos a resposta;

const p1 = new Promise(function(resolve,reject){
  setTimeout(function(){
    resolve(15);
  },2000)
});

const p2 = Promise.resolve(10);

const p3 = new Promise((resolve,reject)=>{
  resolve(12);
});

Promise.all([p1,p2,p3]).then((values) => console.log(values))