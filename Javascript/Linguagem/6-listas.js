console.log("Trabalhando com listas");
// const salvador = `Salvador`;
// const saoPaulo = `Sao Paulo`;
// const rioDeJaneiro = `Rio de Janeiro`;

const listaDeDestinos = new Array(`Salvador`, `Sao Paulo`, `Rio de Janeiro`, `Curitiba`);

listaDeDestinos.push(`Vitoria`); // adicionando itens

console.log("Destinos possiveis: ");
//console.log(salvador, saoPaulo, rioDeJaneiro);
console.log(listaDeDestinos);

listaDeDestinos.splice(1, 1);
console.log(listaDeDestinos);
console.log(listaDeDestinos[1]);


