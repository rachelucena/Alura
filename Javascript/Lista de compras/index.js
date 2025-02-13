import { criarItemDaLista } from "./scripts/criarItemDaLista.js";
import verirficarLIstaVazia from "./scripts/verirficarLIstaVazia.js";

const listaDeCompras = document.getElementById("lista-de-compras");
const botaoAdicionar = document.getElementById("adicionar-item");

botaoAdicionar.addEventListener("click", (evento) => {
    evento.preventDefault();
    const itemDaLista = criarItemDaLista();
    itemDaLista.appendChild(itemData);
    listaDeCompras.appendChild(itemDaLista);
    verirficarLIstaVazia(listaDeCompras);
})

verificarListaVazia(listaDeCompras);
