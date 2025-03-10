const botaoDeleta = () => {
    const btDeleta = document.createElement('button');

    btDeleta.innerText = 'Deletar';

    btDeleta.addEventListener('click', deletarTarefa);
    return btDeleta;
}

const deletarTarefa = (evento) => {
    const btDeleta = evento.target;
    
    const tarefaCompleta = btDeleta.parentElement;

    tarefaCompleta.remove();

    return btDeleta;
}

export default botaoDeleta