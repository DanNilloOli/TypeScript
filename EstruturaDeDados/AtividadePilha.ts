import readlinesync = require("readline-sync");
import { Stack } from './interface/stack';

const estante = new Stack<string>;
var menu : number;
var fecharmenu : number = 2;

do {
    console.log("\n\n---------- Livraria Jose Bonifacio ----------");
    console.log("\n++++++++++++++++++++++++++++++++++++++++++++++++");
    console.log("\n---------- Seja Bem Vinde ----------");
    console.log("\n++++++++++++++++++++++++++++++++++++++++++++++++");
    console.log("\n (1) Adicionar um novo livro na estante.");
    console.log("\n (2) Listar todos os livros da estante.");
    console.log("\n (3) Retirar um livro da estante.");
    console.log("\n (0) Encerrar o programa.");
    console.log("\n++++++++++++++++++++++++++++++++++++++++++++++++");
    menu = readlinesync.questionInt("Seleciona a opcao desejada: ");
    console.log("\n------------------------------------------------");

    switch(menu) {
     
        case 1:
            let livro = readlinesync.question("\nEscreva o titulo do livro: ");
            estante.push(livro);
            console.log("\nLivro adicionado com sucesso!"); break;

        case 2: 
            console.log("\nlivros disponiveis: ")
            estante.printStack();

            if (estante.isEmpty() === true) {
            console.log("\n Estante vazia..."); break;}

        case 3:
            console.log("\nRetirar livro: " + estante.pop());
            console.log("\nProntinho, livro retirado!"); break;

        case 0: break;
        }
        fecharmenu = readlinesync.questionInt("\nPermanecer no menu? (1) Sim / (2) Nao: ");
        }while (fecharmenu !== 2);
        console.log("\n\nAté logo! ;)");






    


   










