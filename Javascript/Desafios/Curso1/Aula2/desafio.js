let dia = prompt('Hoje e que dia da semana?');
if (dia == 'Sabado') {
    alert('Bom fim de semana!');
} else if (dia == 'Domingo')  {
    alert('Bom fim de semana!');
} else {
    alert('Boa semana!');
}

let numero = prompt('Digite um numero');
if (numero < 0) {
    alert('Numero negativo');
} else {
    alert('Numero positivo');
}

pontuacao = 105;
if (pontuacao >= 100) {
    console.log('Parabéns, você venceu!');
} else {
    console.log('Tente novamente para ganhar.');
}

let saldoConta = 500; // Exemplo de saldo
alert(`Seu saldo é de R$${saldoConta}.`);

let nome = prompt('Digite seu nome');
console.log(nome);
alert(`Bem vindo(a) ${nome}`);