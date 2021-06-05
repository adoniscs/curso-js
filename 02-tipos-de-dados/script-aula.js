var simbolo = Symbol();
console.log(typeof simbolo);

var nome = "Adonis";
var sobrenome = "Silveira";
var nomeCompleto = nome + " " + sobrenome;
console.log(nomeCompleto);

var gols = 1000;
var frase = "Romário fez " + gols + " gols";
console.log(frase);

var frase1 = "Esse é o 'melhor' jogo";
var frase2 = 'Testando "aspas" duplas';

// usando template string
var frase3 = `Ola mundo, eu fiz ${gols * 2} gols!!!`;
console.log(frase3);
