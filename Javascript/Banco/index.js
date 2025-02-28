import { Cliente } from "./cliente.js";
import { ContaCorrente } from "./contaCorrente.js";
import { ContaPoupanca } from "./contaPoupanca.js";
import { Conta } from "./conta.js";

const cliente1 = new Cliente('Ricardo', 11122233309);

const contaCorrenteRicardo = new Conta(0, cliente1, 1001);

contaCorrenteRicardo.depositar(500);
contaCorrenteRicardo.sacar(100);

const contaPoupanca = new Conta(50, cliente1, 1001);

console.log(contaCorrenteRicardo);
console.log(contaPoupanca);
