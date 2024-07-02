import * as readlineSync from 'readline-sync';

const numeros: Set<number> = new Set<number>();

numeros.add(2);
numeros.add(5);
numeros.add(1);
numeros.add(3);
numeros.add(4);
numeros.add(9);
numeros.add(7);
numeros.add(8);
numeros.add(10);
numeros.add(6);

console.table(Array.from(numeros));

console.log("\n******* Selecione um numero inteiro e eu vou responder se ele se encontra na tabela acima! *******")


const selecionado: number = readlineSync.questionInt("\nDigite um numero inteiro: ");

if (numeros.has(selecionado)) {
    console.log(`\nO numero ${selecionado} foi encontrado!`);
} else {
    console.log(`\nO numero ${selecionado} nao foi encontrado!`);
}

console.log("\n***************  ***************  ***************");


