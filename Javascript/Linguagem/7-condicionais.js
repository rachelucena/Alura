console.log("Trabalhando com condicionais");

const listaDeDestinos = new Array(`Salvador`, `Sao Paulo`, `Rio de Janeiro`, `Curitiba`);

listaDeDestinos.push(`Vitoria`); // adicionando itens

const idade = 15;
const estaAcompanhada = true;
const temPassagemComprada = true;

console.log("Destinos possiveis: ");
//console.log(salvador, saoPaulo, rioDeJaneiro);
console.log(listaDeDestinos);

if (idade >= 18 || estaAcompanhada == true) {
    console.log("Boa viagem!");
    listaDeDestinos.splice(1, 1);
} else {
    console.log("Comprador nao e maior de idade e nao posso vender");
}

console.log("Embarcando...");
if (idade >=18 && temPassagemComprada) {
    console.log("Boa viagem!");
} else {
    console.log("Voce nao pode embarcar!");
}




