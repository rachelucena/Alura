// Crie uma função que receba a idade de uma pessoa e retorne se ela é maior de idade (idade >= 18). 
// Imprima o resultado no console.

function conferirIdade(idade) {
    return idade >= 18 ? 'Maior de idade' : 'Menor de idade';
}

console.log(verificarMaiorIdade(20)); // Saída: "Maior de idade"
console.log(verificarMaiorIdade(16)); // Saída: "Menor de idade"