var pessoa = {
  nome: "Adonis",
  idade: 25,
};

console.log(pessoa);

var quadrado = {
  lados: 4,
  area(lado) {
    return lado * lado;
  },
  perimetro(lado) {
    return this.lados * lado;
  },
  cinco() {
    return 5;
  },
};

console.log(quadrado.area(5));
console.log(quadrado.perimetro(5));

console.log((Math.random() * 1000).toFixed(0));

var menu = {
  width: 800,
  height: 50,
  backgroundColor: "#84E",
  metadeHeight() {
    return this.height / 2;
  },
};

menu.backgroundColor = "#F89";
menu.color = "red";

menu.esconder = function () {
  console.log("Escondido");
};

var bg = menu.backgroundColor;
