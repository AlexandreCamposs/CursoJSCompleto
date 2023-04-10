let express = require('express');
let app = express();

app.get('/',function(req,res){
  res.send("Primeira rota criada com express.");
});

app.listen(3000,()=>{
  console.log('A aplicação está funcionando na porta 3000')
})