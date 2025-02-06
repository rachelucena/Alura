let jogoAlugado = null; // Variável que guarda o ID do jogo alugado

function alterarStatus(id) {
    const botao = document.querySelector(`#game-${id} .dashboard__item__button`);
    const imagem = document.querySelector(`#game-${id} .dashboard__item__img`);

    if (jogoAlugado === id) {
        // Se o jogo já está alugado, significa que o usuário quer devolvê-lo
        botao.textContent = "Alugar";
        botao.classList.remove("dashboard__item__button--return");
        imagem.classList.remove("dashboard__item__img--rented");
        jogoAlugado = null;
    } else {
        // Se outro jogo já está alugado, impede o aluguel
        if (jogoAlugado !== null) {
            alert("Você precisa devolver o jogo atual antes de alugar outro.");
            return;
        }
        // Aluga o novo jogo
        botao.textContent = "Devolver";
        botao.classList.add("dashboard__item__button--return");
        imagem.classList.add("dashboard__item__img--rented");
        jogoAlugado = id;
    }
}