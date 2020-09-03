const express = require('express');
const app = express();

app.use(express.urlencoded({ extended: true})); // Faz isso para poder tratar o que vem no body da requisicao

app.get('/', (req, res) => {
  res.send(`
  <form action="/" method="POST">
  Nome do cliente: <input type="text" name="nome">
  <button>Enviar</button>
  </form>
  `);
});

app.get('/testes/:idUsuarios?/:parametros?', (req, res) => { 
  // Com a interrogacao o parametro eh opcional
  console.log(req.params);  // /testes/2/parametro
  console.log(req.query);   // /testes/?chave1=valor1&chave2=valor2
  res.send(req.query)
})

app.post('/', (req, res) => {
  console.log(req.body);
  res.send(`O nome do cliente é: ${req.body.nome}`)
})

app.listen(3000, () => {
  console.log('Acessar http://localhost:3000')
  console.log('Servidor executando na porta 3000');
});
