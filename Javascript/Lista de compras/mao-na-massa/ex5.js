// Exercício 5) Manipulação do DOM para capturar valores do arquivo HTML com JavaScript
// Agora que você já integrou o arquivo JavaScript ao arquivo HTML, você pode acessar os elementos do DOM 
// (Document Object Model) utilizando o JavaScript para manipular os elementos da página de forma dinâmica.
// Portanto, seu objetivo é criar uma tag <h1> com um título qualquer no seu arquivo "index.html" e usar o 
// JavaScript para acessar esse elemento e modificar o texto dele.
// Uma dica que pode te ajudar é usar o document.querySelector para acessar o documento e o 
// innerHTML para modificar o texto.

let h1 = document.querySelector('h1');
h1.innerHTML = "To estudando Javascript, gente!";