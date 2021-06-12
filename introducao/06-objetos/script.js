// Crie um objeto com os seus dados pessoais
// Deve possuir pelo menos duas propriedades nome e sobrenome
var dadosPessoais = {
  nome: "Fred",
  sobrenome: "Silveira",
  idade: 1,
  // nomeCompleto() {
  //   return `${this.nome} ${this.sobrenome}`;
  // },
};

// Crie um método no objeto anterior, que mostre o seu nome completo
// console.log(dadosPessoais.nomeCompleto());
// ou posso criar da seguinte maneiro:
dadosPessoais.nomeCompleto = function () {
  return `${dadosPessoais.nome} ${dadosPessoais.sobrenome}`;
};
console.log(dadosPessoais.nomeCompleto());

// Modifique o valor da propriedade preco para 3000
var carro = {
  preco: 1000,
  portas: 4,
  marca: "Audi",
};
carro.preco = 3000;
console.log(carro);

// Crie um objeto de um cachorro que represente um labrador
// preto com 10 anos, que late ao ver um homem

var cachorro = {
  raca: "Labrador",
  cor: "Preto",
  idade: 10,

  latir(pessoa) {
    if (pessoa === "homem") {
      return "Latir";
    } else {
      return "Ficar quieto";
    }
  },
};
console.log(cachorro);
console.log(cachorro.latir("homem"));
