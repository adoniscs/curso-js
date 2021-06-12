// Crie uma função para verificar se um valor é Truthy
function verificaValor(valor) {
  return !!valor;
}
console.log(verificaValor(90));

// Crie uma função matemática que retorne o perímetro de um quadrado
// lembrando: perímetro é a soma dos quatro lados do quadrado
function perimetroQuadrado(lados) {
  var perimetro = lados * 4;
  return perimetro;
}
console.log(perimetroQuadrado(8));

// Crie uma função que retorne o seu nome completo
// ela deve possuir os parâmetros: nome e sobrenome
function nomeCompleto(nome, sobrenome) {
  return `${nome} ${sobrenome}`;
}
console.log("Adonis", "Silveira");

// Crie uma função que verifica se um número é par
function numeroPar(numero) {
  if (numero % 2 === 0) {
    return "É par";
  } else {
    return "é impar";
  }
}
console.log(numeroPar(3));

// Crie uma função que retorne o tipo de
// dado do argumento passado nela (typeof)
function tipoDeDado(dado) {
  return typeof dado;
}
console.log(tipoDeDado("Adonis"));

// addEventListener é uma função nativa do JavaScript
// o primeiro parâmetro é o evento que ocorre e o segundo o Callback
// utilize essa função para mostrar no console o seu nome completo
// quando o evento 'scroll' ocorrer.
function nomeCompleto() {
  console.log("Adonis Cipriano");
}
addEventListener("scroll", nomeCompleto);

// Corrija o erro abaixo
var totalPaises = 193;

function precisoVisitar(paisesVisitados) {
  return `Ainda faltam ${totalPaises - paisesVisitados} países para visitar`;
}
function jaVisitei(paisesVisitados) {
  return `Já visitei ${paisesVisitados} do total de ${totalPaises} países`;
}
console.log(precisoVisitar(20));
console.log(jaVisitei(20));
