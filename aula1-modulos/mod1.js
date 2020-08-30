const nome = 'Matheus';
const sobrenome = 'Figueiredo';
const falaNome = () => nome + ' ' + sobrenome

// module.exports.nome = nome;
// module.exports.sobrenome = sobrenome;
// module.exports.falaNome = falaNome;

exports.nome = nome;
exports.sobrenome = sobrenome;
exports.falaNome = falaNome;
this.exporta = "O que eu quiser exportar";

// console.log(exports);
