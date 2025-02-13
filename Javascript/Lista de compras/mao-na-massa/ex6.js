const campoDeEntrada = document.getElementById("input-item");
const botaoSalvar = document.getElementById("button-item");

botaoSalvar.addEventListener("click", function() {
    console.log(campoDeEntrada.value);
})