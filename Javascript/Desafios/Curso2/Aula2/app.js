function saudacao() {
    return console.log('Olá, mundo!');
}

saudacao();

function saudacaoComNome(nome) {
    return console.log(`Olá, ${nome}!`);
}

let nome = prompt('Digite seu nome');
saudacaoComNome();

function dobro(numero) {
    return console.log(`O dobro de ${numero} é ${resultado}`);
}

let numero = prompt('Digite um número');
let resultado = numero * 2;
dobro();

function media(num1, num2, num3) {
    return console.log(`A media é ${media}`)    
}

let num1 = prompt('Digite um numero');
let num2 = prompt('Digite um numero');
let num3 = prompt('Digite um numero');
let media = (num1 + num2 + num3) / 3;
media();

function maior(n1, n2) {
    let n1 = prompt('Digite um numero');
    let n2 = prompt('Digite um numero');
    if (n1 > n2) {
        console.log(`O número ${n1} é maior`);
    } else {
        console.log(`O número ${n2} é maior`);
    }
}

maior();

function multiplicacao(a) {
    console.log(`${a} multiplicado por ele mesmo é ${vezes}`);
}

let a = prompt('Digite um numero');
let vezes = a * a;
multiplicacao()
