/* Crie um menu interativo no console que oferece ao usuário a escolha de três opções. Utilize switch-case para implementar a lógica de cada opção selecionada. */

const prompt = require('prompt-sync')()

let op = prompt('Digite a opção desejada (1, 2, ou 3): ')

switch (op) {
    case '1':
        console.log('Opção 1 selecionada')
        break
    case '2':
        console.log('Opção 2 selecionada')
        break
    case '3':
        console.log('Opção 3 selecionada')
        break
    default:
        console.log('Opção inválida')
        break
}