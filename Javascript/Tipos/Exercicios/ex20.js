function maiorNumero(num1, num2, num3) {
    if (num1 >= num2 && num1 >= num3) {
      return num1; // num1 é o maior
    } else if (num2 >= num1 && num2 >= num3) {
      return num2; // num2 é o maior
    } else {
      return num3; // num3 é o maior
    }
  }
  
  // Testando a função
  console.log(maiorNumero(10, 20, 15)); // 20
  console.log(maiorNumero(5, 3, 9));   // 9
  console.log(maiorNumero(7, 7, 7));   // 7