import { automovel } from "./automovel";
import { terrestre } from "./terrestre";
import { transporte } from "./transporte";

const t1: transporte = new transporte(5);
t1.visualizar();

console.log("\n");

const tr1: terrestre = new terrestre(5, 4, 250);
tr1.visualizar();

console.log("\n");

const aut1: automovel = new automovel(5, 4, 300, "Azul", 4, "GEN-4587", 6);
aut1.visualizar();