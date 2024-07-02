import readlinesync = require("readline-sync");

const colecaoarray: Array<number> = [2,5,1,3,4,9,7,8,10,6];

console.log("\n +++++++ Vamos achar o numero no Array? +++++++")

const numerodigitado: number = readlinesync.questionInt("\n\nDigite um numero: ");

const posicao = colecaoarray.indexOf(numerodigitado);

if (posicao !== -1) {
    console.log(`\nO numero ${numerodigitado} foi encontrado na posicao ${posicao}.`);
} else {
    console.log(`\nO numero ${numerodigitado} nao foi encontrado! Tente novamente`);
}

console.log("\nLista atual de numeros:");
console.table(colecaoarray);


