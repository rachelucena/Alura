const botaoConclui = () => {
    const btConclui = document.createElement('button');

    btConclui.classList.add('check-button');

    btConclui.innerText = 'Concluir'

    btConclui.addEventListener('click', concluirTarefa);

    return btConclui;
}

const concluirTarefa = (evento) => {
    const btConclui = evento.target;

    const tarefaCompleta = btConclui.parentElement;

    tarefaCompleta.classList.toggle('done');
};

export default botaoConclui