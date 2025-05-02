/* Fazer um algoritmo para receber números decimais até que o usuário digite 0 e fazer a média aritmética desses números. */

const prompt = require('prompt-sync')()

let num = 1
let soma = 0
let contador = 0

while (num !== 0) {
    num = parseFloat(prompt('Digite um número: '))
    if (num !== 0) {
        soma += num
        contador++
    }
}

if (contador > 0) {
    console.log('Média:', soma / contador)
} else {
    console.log('Nenhum número válido foi digitado.')
}
