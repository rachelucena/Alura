const estudanteReprovou = (notaFinal, faltas) => { // o valor da variavel sera a funcao
    if (notaFinal < 7 && faltas > 4) {
        return true
    } else {
        return false
    }
}

console.log(estudanteReprovou(6, 5));
console.log(estudanteReprovou(10, 2));

// tambem nao pode chamar antes de ser declarada

const exibeNome = (nome) => nome; // usado para trabalhar com funcoes dentro de funcoes ou se tiver apenas uma linha de retorno
console.log('Caroline');
