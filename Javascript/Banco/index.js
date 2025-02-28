import { Cliente } from "./cliente.js";
import { ContaCorrente } from "./contaCorrente.js";

const cliente1 = new Cliente('Ricardo', 11122233309);

const cliente2 = new Cliente('Alice', 88822233309);

let numeroDeContas = 0;

const contaCorrenteRicardo = new ContaCorrente(1001, cliente1);

contaCorrenteRicardo.depositar(100); // 100 reais de deposito
contaCorrenteRicardo.depositar(200);
contaCorrenteRicardo.depositar(-1);

const valorSacado = contaCorrenteRicardo.sacar(50); // valor que vai sacar
console.log(valorSacado);

const conta2 = new ContaCorrente(1002, cliente2);

contaCorrenteRicardo.transferir(200, conta2);
console.log(conta2);


console.log(cliente1);
console.log(cliente2);
console.log(ContaCorrente.numeroDeContas);