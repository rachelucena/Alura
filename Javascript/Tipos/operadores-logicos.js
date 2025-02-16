const notaFinal = 7;
const faltas = 3;
const advertencias = 0;

if (notaFinal < 7 || faltas > 4) { // apenas uma das condicoes precisa ser avaliada como true
    console.log('Reprovado, boas festas');
} else {
    console.log('Nao foi reprovado');
}

if (notaFinal < 7 && faltas > 4) { // ambas as condicoes precisam ser avaliadas como true
    console.log('Reprovado, boas festas');
} else {
    console.log('Nao foi reprovado');
}

if (faltas <= 2 && !advertencias) {
    console.log('Recebeu bonus');
} else {
    console.log('Nao recebeu bonus');
}