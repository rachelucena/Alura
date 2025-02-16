//Crie variáveis que armazenem o valor do saldo, de depósito e de um saque de uma conta bancária, 
//depois realize operações de adição e subtração entre eles utilizando uma variável chamada operacao, 
// considerando a função de cada variável criada anteriormente. Exiba os resultados finais no console.

const saldo = 6.000;
const deposito = 3.000;
const saque = 4.000;

const operacao = (saldo + deposito) - saque;

console.log(`Seu saldo final e ${operacao}`);