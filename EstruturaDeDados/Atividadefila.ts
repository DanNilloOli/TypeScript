import readlinesync = require("readline-sync");
import { Queue } from "./interface/queue";

const turma = new Queue<string>();
var menu;
var fecharmenu : number = 2;

do {
    console.log("\n\n++++++++++ Escola Padre Antao ++++++++++");
    console.log("\n------------------------------------------------");
    console.log("\n++++++++++ Turma - 6 ano A ++++++++++");
    console.log("\n------------------------------------------------");
    console.log("\n (1) Adicionar um novo anule a turma.");
    console.log("\n (2) Listar todos alunes da turma.");
    console.log("\n (3) Retirar alune da turma.");
    console.log("\n (0) Encerrar.");
    console.log("\n++++++++++++++++++++++++++++++++++++++++++++++++");
    menu = readlinesync.questionInt("Seleciona a opcao desejada: ");
    console.log("\n------------------------------------------------");

    switch(menu) {
        case 1:
            const aluno = readlinesync.question("\nDigite o nome do novo aluno: ");
            turma.enqueue(aluno);
            console.log(`\nAluno ${aluno} adicionado com sucesso!`);
            break;

        case 2: 
            console.log("\nLista de turma - 6 ano A: ");
            turma.printQueue();

            if (turma.isEmpty()) {
                console.log("\n Turma vazia...");
            }
            break;

        case 3:
            const removedAluno = turma.dequeue();
            if (removedAluno) {
                console.log(`\nAluno ${removedAluno} foi removido!`);
            } else {
                console.log("\nNenhum aluno para remover. A turma esta vazia.");
            }
            break;

        case 0: 
            break;

        default:
            console.log("Opcao invalida. Tente novamente.");
            break;
    }
    fecharmenu = readlinesync.questionInt("\nPermanecer no menu? (1) Sim / (2) Nao: ");
} while (fecharmenu !== 2);

console.log("\n\nAte logo! ;)");

