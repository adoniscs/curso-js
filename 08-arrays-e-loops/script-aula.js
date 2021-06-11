var videoGames = ['Switch', 'PS4', 'XBOX', '3DS']
console.log(videoGames)

// var removeUltimoItem = videoGames.pop()
// console.log(videoGames)

var addItemNoFinal = videoGames.push('PS5')
console.log(videoGames)

for (var numero = 0; numero < 10; numero++) {
  console.log(numero)
}

var i = 0
while (i < 10) {
  console.log(i)
  i += 2
}

for (var item = 0; item < videoGames.length; item++) {
  console.log(`${item} - ${videoGames[item]}`)
  if (videoGames[item] === 'PS4') {
    videoGames.push('PS6')
  }
}
console.log('=================')
var frutas = ['Banana', 'Uva', 'Morango', 'Abacaxi', 'Maça']
frutas.forEach(function (item, index) {
  console.log(`${index} - ${item}`)
})
