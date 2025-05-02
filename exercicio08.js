/* Escreva um algoritmo para ler 2 valores (considere que não serão lidos valores iguais) e escreve-los em ordem crescente. */

const prompt = require('prompt-sync')();

let num1 = parseFloat(prompt('Digite o primeiro número: ').replace(',', '.'))
let num2 = parseFloat(prompt('Digite o segundo número: ').replace(',', '.'))

if (num1 > num2) {
    console.log(num2, num1)
} else {
    console.log(num1, num2)
}