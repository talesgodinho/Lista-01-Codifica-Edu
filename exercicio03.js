/* Implemente um programa que recebe uma nota de 0 a 10 e classifica como "Aprovado", "Recuperação", ou "Reprovado" utilizando if-else if. */

const prompt = require('prompt-sync')()

let nota = parseFloat(prompt('Digite sua nota: ').replace(',', '.'))

if (nota >= 7) {
    console.log('Aprovado')
    if (nota > 10) {
        console.log('Nota considerada: 10')
    }
} else if (nota >= 5) {
    console.log('Recuperação')
} else {
    console.log('Reprovado')
}   
