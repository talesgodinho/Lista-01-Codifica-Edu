/* Crie um programa que exibe a tabuada de um número fornecido pelo usuário (de 1 a 10) utilizando um loop for. */

const prompt = require('prompt-sync')()

let num = parseInt(prompt('Digite um número: '))

for (let i = 1; i <= 10; i++) {
    console.log(`${num} x ${i} = ${num * i}`)
}