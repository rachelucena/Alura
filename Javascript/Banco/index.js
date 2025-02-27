import { Cliente } from "./cliente";
import { ContaCorrente } from "./contaCorrente";

const cliente1 = new Cliente();
cliente1.nome = 'Ricardo';
cliente1.cpf = 11122233309;

const cliente2 = new Cliente();
cliente2.nome = 'Alice';
cliente2.cpf = 88822233309;

const contaCorrenteRicardo = new ContaCorrente()
contaCorrenteRicardo.agencia = 1001;
contaCorrenteRicardo.cliente = cliente1;

contaCorrenteRicardo.depositar(100); // 100 reais de deposito
contaCorrenteRicardo.depositar(200);
contaCorrenteRicardo.depositar(-1);

const valorSacado = contaCorrenteRicardo.sacar(50); // valor que vai sacar
console.log(valorSacado);

const conta2 = new ContaCorrente();
conta2.cliente = cliente2;
conta2.agencia = 1002;

contaCorrenteRicardo.transferir(200, conta2);
console.log(conta2);


console.log(cliente1);
console.log(cliente2)