console.log('Boas vindas!');

let nome = 'Rachel';
console.log(`Ola, ${nome}`);

let nome1 = 'Rachel';
alert(`Ola, ${nome}`);

let linguagem = prompt('Qual a linguagem de programacao que voce mais gosta?');
console.log(linguagem);

let valor1 = 2;
let valor2 = 3;
let resultado = valor1 + valor2;
console.log(`A soma de ${valor1} e ${valor2} é igual a ${resultado}.`);

let valor3 = 8;
let valor4 = 4;
let resultado2 = valor3 - valor4;
console.log(`A diferenca entre ${valor3} e ${valor4} é igual a ${resultado2}.`);

let idade = prompt('Digite sua idade');
if (idade >= 18) {
    console.log('Voce e maior de idade');
} else {
    console.log('Voce ainda e menor de idade');
}

let numero = parseFloat(prompt('Digite um numero'))
if (numero = 0) {
    alert('O numero digitado e zero');
} if (numero > 0) {
    alert('O numero digitado e positivo');
} else {
    alert('O numero digitado e negativo');
}

let numero2 = 1;
while (numero2 <= 10) {
    console.log(numero2);
    numero2++;
}

let nota = parseFloat(prompt('Digite uma nota'));
if (nota >= 7) {
    console.log('Aprovado');
} else {
    console.log('Reprovado');
}

let numeroAleatorio = Math.random();
console.log(numeroAleatorio);

let numeroAleatorio2 = parseInt(Math.random() * 10 + 1);
console.log(numeroAleatorio2);

let numeroAleatorio3 = parseInt(Math.random() * 1000 + 1);
console.log(numeroAleatorio3);