// Retorne a URL da página atual utilizando o objeto window
console.log(window.location.href)

// Seleciona o primeiro elemento da página que
// possua a classe ativo
const classActive = document.querySelector('.ativo')

// Retorne a linguagem do novegador
const langBrowser = window.navigator.language

if (langBrowser === 'pt-BR') {
  const alterH1 = document.querySelector('h1')
  alterH1.innerText = 'This is the title'
}

// Retorne a largura da janela
const widthWindow = window.innerWidth
