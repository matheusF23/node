exports.paginaInicial = (req, res, next) => {
  console.log('Respondendo ao cliente');
  res.render('index');
  console.log(`'página inicial' - Olha o que tem na req.sesion.nome: ${req.session.nome}`);
  next();
};

exports.trataPost = (req, res) => {
  res.send('Ei, sou sua nova rota de POST.');
}
