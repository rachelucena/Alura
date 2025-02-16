function exibeInfosEstudantes(nome, nota) {
    console.log(`O nome e ${nome} e a nota e ${nota}`);
}

exibeInfosEstudantes('Caroline', 10);
exibeInfosEstudantes('Ana', 7);

function exibeInfosEstudantes(nome, nota) {
    return `O nome e ${nome} e a nota e ${nota}`;
}

console.log(exibeInfosEstudantes('Caroline', 10));
console.log(exibeInfosEstudantes('Ana', 7));