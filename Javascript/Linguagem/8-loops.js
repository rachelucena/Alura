console.log("Trabalhando com condicionais");

const listaDeDestinos = new Array(`Salvador`, `Sao Paulo`, `Rio de Janeiro`, `Curitiba`);

listaDeDestinos.push(`Vitoria`); // adicionando itens

const idade = 15;
const estaAcompanhada = true;
let temPassagemComprada = false;
const destino = "Salvador";

console.log("Destinos possiveis: ");
//console.log(salvador, saoPaulo, rioDeJaneiro);
console.log(listaDeDestinos);

const podeComprar = idade >= 18 || estaAcompanhada == true;
let contador = 0;
let destinoExiste = false;

while (contador < 5) {
    if (listaDeDestinos[contador] = destino) {
        destinoExiste = true;
        break;
    } 
    contador++;
}

console.log("Destino existe:", destinoExiste);

for (let cont = 0; cont < 5; cont++) {
    if (listaDeDestinos[contador] == destino) {
        destinoExiste = true;
    }
}
