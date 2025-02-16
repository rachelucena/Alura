function verificarPalindromo(str) {
    // Converte a string em um array, inverte e junta novamente em uma string
    let strInvertida = str.split('').reverse().join('');
    
    // Compara a string original com a invertida
    return str === strInvertida;
  }
  
  // Testando a função
  console.log(verificarPalindromo('arara')); // true
  console.log(verificarPalindromo('hello')); // false