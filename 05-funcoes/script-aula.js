function areaQuadrado(lado) {
  return lado * lado;
}

var resposta = areaQuadrado(4);
console.log(`A área do quadrado é ${resposta}m²`);

function pi() {
  return 3.14;
}

var mult = 3;
var total = pi() * mult;
console.log(`PI multiplicado por ${mult} é ${total}`);

function imc(peso, altura) {
  var imc = peso / (altura * altura);
  return imc;
}

console.log(imc(80, 1.68));

function corFavorita(cor) {
  if (cor === "azul") {
    return "Eu gosto do céu";
  } else if (cor === "verde") {
    return "Eu gosto de mato";
  } else {
    return "Eu não gosto de cores";
  }
}

console.log(corFavorita("preto"));

function mostraConsole() {
  console.log("Oi, sumida!");
}

addEventListener("click", mostraConsole);

function imc2(peso, altura) {
  const imc = peso / altura ** 2;
  console.log(imc);
}

imc2(80, 1.6); // undefined
// console.log(imc2(80, 1.8));

function terceiraIdade(idade) {
  if (typeof idade !== "number") {
    return "Informe uma idade válida";
  } else if (idade >= 60) {
    return "Terceira idade";
  } else {
    return "Jovem ainda";
  }
}
console.log(terceiraIdade(50));
console.log(terceiraIdade(65));
console.log(terceiraIdade("pla"));

function faltaVisitar(paisesVisitados) {
  var totalPaises = 193;
  var total = totalPaises - paisesVisitados;
  return `Faltam visitar ${total} paises`;
}

console.log(faltaVisitar(100));

var profissao = "Desenvolvedor";

function dados() {
  var nome = "Adonis";
  var idade = 25;

  function outrosDados() {
    var endereco = "São Paulo";
    return `${nome}, ${idade}, ${endereco}, ${profissao}`;
  }
  return outrosDados();
}

console.log(dados());
