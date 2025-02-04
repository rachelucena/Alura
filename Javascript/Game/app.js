alert('Boas vindas ao jogo do número secreto!');
let numeroMaximo = 5000
let numeroSecreto = parseInt(Math.random() * numeroMaximo + 1);
console.log(numeroSecreto);
let chute;
let tentativas = 1;

while (chute != numeroSecreto) {
    chute = prompt(`Escolha um número entre 1 e ${numeroMaximo}.`);

    // se chute for igual ao numero secreto
    if (chute == numeroSecreto) {
        break
    } else {
        if (chute < numeroSecreto) {
            alert(`Você errou! =( O número secreto é maior do que ${chute}.`);
        } else {
            alert(`Você errou! =( O número secreto é menor do que ${chute}.`);
        }
        // tentativas = tentativas + 1
        tentativas++;
    }
}

let palavraTentativas = tentativas > 1 ? 'tentativas' : 'tentativa';

//if (tentativas > 1) {
//    alert(`Isso aí! Você descobriu o número secreto ${numeroSecreto} com ${tentativas} tentativas! Parabéns!`);
//} else {
//    alert(`Isso aí! Você descobriu o número secreto ${numeroSecreto} com ${tentativas} tentativa! Parabéns!`);
//}

alert(`Isso aí! Você descobriu o número secreto ${numeroSecreto} com ${tentativas} ${palavraTentativas}! Parabéns!`)


