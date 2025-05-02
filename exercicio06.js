/* Ler três valores para os lados de um triângulo: A, B e C. Verificar se os lados fornecidos formam realmente um triângulo. Caso forme, deve ser indicado o tipo de triângulo: Isósceles, escaleno ou eqüilátero.*/

const prompt = require('prompt-sync')();

let ladoA = parseFloat(prompt('Digite o lado A: ').replace(',', '.'))
let ladoB = parseFloat(prompt('Digite o lado B: ').replace(',', '.'))
let ladoC = parseFloat(prompt('Digite o lado C: ').replace(',', '.'))

if ((ladoA + ladoB > ladoC) &&
    (ladoA + ladoC > ladoB) &&
    (ladoB + ladoC > ladoA)) {
    
    if (ladoA === ladoB && ladoB === ladoC) {
        console.log('Equilátero')
    } else if (ladoA === ladoB || ladoA === ladoC || ladoB === ladoC) {
        console.log('Isósceles')
    } else {
        console.log('Escaleno')
    }

} else {
    console.log('Os valores fornecidos não formam um triângulo.')
}
