// nomeie 3 propriedades ou métodos de strings
var txt = "ola mundo";
txt.length;
txt.toLowerCase();
txt.toUpperCase();

// nomeie 5 propriedades ou métodos de elementos do DOM
var btn = document.querySelector(".btn");
// addEventListener
// appendChild
// innerHTML
// outerHTML
console.log(btn);

// busque na web um objeto (método) capaz de interagir com o clip
// clipboard é a parte do seu computador que lida com o CTRL + C
function clipboard() {
  var copyText = document.querySelector("#myInput");
  copyText.select();
  copyText.setSelectionRange(0, 99999);
  document.execCommand("copy");
  alert(`Copied the text ${copyText.value}`);
}
