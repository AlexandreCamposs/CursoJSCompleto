function saudacao(nome){
  if(typeof nome != 'string'){
    throw new Error("O parâmentro nome precisa ser uma função.")
  }else{
    console.log(`Olá ${nome}`)
  }
}

saudacao("Alexandre");
saudacao(4);
saudacao("teste");
