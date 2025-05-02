/* As maçãs custam R$ 0,30 se forem compradas menos do que uma dúzia, e R$ 0,25 se forem compradas pelo menos doze. Escreva um algoritmo que leia o número de maçãs compradas, calcule e escreva o valor total da compra. */

const prompt = require('prompt-sync')()

let num = parseInt(prompt('Digite o número de maçãs compradas: '))

if (num < 12) {
    console.log(`O valor total da compra é de R$ ${num * 0.30}`)
} else {
    console.log(`O valor total da compra é de R$ ${num * 0.25}`)
}