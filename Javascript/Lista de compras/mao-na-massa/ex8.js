const containerCheckbox = document.createElement("div");
containerCheckbox.classList.add("container", "checkbox");
const checkboxInput = document.createElement("input");
checkboxInput.type = "checkbox";
checkboxInput.classList.add("input", "fintcheckbox");
let contador = 0; // Este contador deve ser inicializado fora da função de adição para manter o estado.
checkboxInput.id = `checkbox_${++contador}`;
const checkboxLabel = document.createElement("label");
checkboxLabel.setAttribute("for", checkboxInput.id);
checkboxLabel.appendChild(checkboxInput);
containerCheckbox.appendChild(checkboxLabel);
document.querySelector("#tarefasListContainer").appendChild(containerCheckbox);