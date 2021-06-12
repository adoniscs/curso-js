console.log(location.href)

const h1Selecionado = document.querySelector('h1')
const h1Class = h1Selecionado.classList

function callbackH1() {
  console.log(`Clicou em: '${h1Selecionado.innerText}'`)
}

h1Selecionado.addEventListener('click', callbackH1)
