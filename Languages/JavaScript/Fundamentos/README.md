# Table of Contents
**[Numeros](#numeros)**<br>
**[Numeros Alguns Cuidados](#numeros-alguns-cuidados)**<br>
**[Boleanos](#boleanos)**<br>
**[Comentários](#comentarios)**<br>

## Numeros

```javascript
const peso1 = 1.0
const peso2 = Number('2.0')

console.log(peso1, peso2)
console.log(Number.isInteger(peso1))
console.log(Number.isInteger(peso2))

const avaliacao1 = 9.871
const avaliacao2 = 6.871

const total = avaliacao1 * peso1 + avaliacao2 * peso2
const media = total / (peso1 + peso2)

console.log(media.toFixed(2))
console.log(media.toString(2)) // em binário
console.log(typeof media)
console.log(typeof Number)
```

## Numeros Alguns Cuidados

```javascript
console.log(7 / 0)
console.log("10" / 2)
console.log('3' + 2) // string ganha!
console.log('3' - 2)
console.log("Show!" * 2)
console.log(0.1 + 0.7)
// console.log(10.toString())
console.log((10.345).toFixed(2))
```

## Boleanos

```javascript
let isAtivo = false
console.log(isAtivo)

isAtivo = true
console.log(isAtivo)

isAtivo = 1
console.log(!!isAtivo)

console.log('os verdadeiros...')
console.log(!!3)
console.log(!!-1)
console.log(!!' ')
console.log(!!'texto')
console.log(!![])
console.log(!!{})
console.log(!!Infinity)
console.log(!!(isAtivo = true))

console.log('os falsos...')
console.log(!!0)
console.log(!!'')
console.log(!!null)
console.log(!!NaN)
console.log(!!undefined)
console.log(!!(isAtivo = false))

console.log('pra finalizar...')
console.log(!!('' || null || 0 || ' '))

let nome = 'Lucas'
console.log(nome || 'Desconhecido')
```

## Comentários

```javascript
// Comentário de uma linha
console.log('Linha 1')
/*
 Comentário de
 múltiplas linhas
*/
console.log('Linha 2')
/*
 * Comentário de
 * múliplas linhas
 */
console.log('Linha 3')
```