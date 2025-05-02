/* Crie um programa que calcula o fatorial de um número fornecido pelo usuário utilizando um loop for ou while. */

const prompt = require('prompt-sync')()

let numero = parseInt(prompt("Digite um número inteiro positivo: "))
let fatorial = 1
let i = numero

if (numero < 0) {
    console.log("Fatorial não é definido para números negativos.")
} else {
    while (i > 1) {
        fatorial *= i
        i--
    }
    console.log(`Fatorial de ${numero} é ${fatorial}`)
}
