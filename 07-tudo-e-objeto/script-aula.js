var nome = "Turin";
var nomeMinusculo = nome.toLowerCase();

var btn = document.querySelector(".btn");

btn.classList.add("azul"); // adiciona a classe azul
btn.innerHTML; // 'Click'
btn.addEventListener("click", () => {
  console.log("Clicou");
});
