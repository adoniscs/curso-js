// Crie um array com os anos que o Brasil ganhou a copa
// 1959, 1962, 1970, 1994 e 2002
var copasVencidas = [1959, 1962, 1970, 1994, 2002]

// Interaja com o array utilizando um loop, para mostrar
// no console a seguinte mensagem: `O Brasil ganhou a copa de ${ano}`
copasVencidas.forEach(function (ano) {
  console.log(`O Brasil ganhou a copa de ${ano}`)
})

// Interaja com um loop nas frutas abaixo e pare ao chegar em Pera
var frutas = ['Banana', 'Maça', 'Pera', 'Uva', 'Melância']
for (var i = 0; i < frutas.length; i++) {
  console.log(frutas[i])
  if (frutas[i] === 'Pera') {
    break
  }
}
// Coloque a última fruta do array acima em uma variável,
// sem remover a mesma da array
var ultimaFruta = frutas[frutas.length - 1]
console.log(`A ultima fruta é ${ultimaFruta}`)
