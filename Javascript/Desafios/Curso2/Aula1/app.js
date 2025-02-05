let titulo = document.querySelector('h1');
titulo.innerHTML = 'Hora do Desafio';

function clicarConsole() {
    console.log('O botão foi clicado');
}

function clicarAlert() {
    alert('Eu amo JS');
}

function clicarPrompt() {
    let cidade = prompt('Digite o nome de uma cidade brasileira:');
    alert(`Estive em ${cidade} e lembrei de você`);
}

function clicarSoma() {
    let n1 = parseInt(prompt('Digite um numero'));
    let n2 = parseInt(prompt('Digite outro numero'));
    let soma = n1 + n2;
    alert(`A soma de ${n1} e ${n2} é ${soma}`);
}