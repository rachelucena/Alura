const estudanteReprovou = function(notaFinal, faltas) { // o valor da variavel sera a funcao
    if (notaFinal < 7 && faltas > 4) {
        return true
    } else {
        return false
    }
}

console.log(estudanteReprovou(6, 5));
console.log(estudanteReprovou(10, 2));

// nesse caso nao posso retornar antes de declarar a funcao
