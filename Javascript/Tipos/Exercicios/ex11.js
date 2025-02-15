// Criando uma variável com uma string
let frase = "JavaScript é incrível!";

// Convertendo para maiúsculas
let maiuscula = frase.toUpperCase();
console.log("Maiúscula:", maiuscula);

// Convertendo para minúsculas
let minuscula = frase.toLowerCase();
console.log("Minúscula:", minuscula);

// Pegando uma parte da string com slice (da posição 0 até 10)
let parte = frase.slice(0, 10);
console.log("Parte da frase:", parte);

// Substituindo uma palavra na string
let novaFrase = frase.replace("incrível", "fantástico");
console.log("Frase modificada:", novaFrase);

// Removendo espaços extras do início e do fim da string
let fraseComEspacos = "   Aprender JavaScript!   ";
let semEspacos = fraseComEspacos.trim();
console.log("Sem espaços:", semEspacos);
