const mod1 = require('./mod1');
// Pode usar desconstrução:
const { nome, sobrenome, falaNome } = require('./mod1');

// console.log(mod1);
// console.log(mod1.falaNome());
console.log(falaNome())

// const path = require('path'); // Para módulos do node precisa do caminho
