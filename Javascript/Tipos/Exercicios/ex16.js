// Imagine um sistema que determina se um usuário tem idade suficiente para comprar o ingresso para um show. 
// Declare duas variáveis que determinem a idade mínima e qual a idade do usuário e utilize estruturas condicionais 
// (if, else) para determinar se o usuário pode realizar a compra.

const idadeMin = 18;
const idade = 17;

if (idade < idadeMin) {
    console.log('Idade minima nao atingida, a compra nao pode ser realizada.')
} else {
    console.log('Compra realizada com sucesso! Bom show!');
}