const titulo = document.querySelector('.titulo');
titulo.textContent = 'Aparecida Nutricionista';

var pacientes = document.querySelectorAll('.paciente');



for (var i = 0; i < pacientes.length; i++) {
    var paciente = pacientes[i];
    console.log(paciente);

    var tdPeso = paciente.querySelector('.info-peso');
    var tdAltura = paciente.querySelector('.info-altura');
    var tdImc = paciente.querySelector('.info-imc');

    var peso = tdPeso.textContent;
    var altura = tdAltura.textContent;

    var pesoEhValido = true;
    var alturaEhValida = true;

    if (peso <= 0 || peso >= 1000) {
        console.log('Peso invalido!');
        tdImc.textContent = 'Peso invalido!';
        pesoEhValido = false;
        paciente.classList.add('paciente-invalido');
    }
    
    if (altura <= 0 || altura >= 3) {
        console.log('Altura invalida!');
        tdAltura.textContent = 'Altura invalida!';
        alturaEhValida = false;
        paciente,classList.add('paciente-invalido');
    }
    
    if (pesoEhValido && alturaEhValida) {
        var imc = peso / (altura * altura);
        tdImc.textContent = imc.toFixed(2);
    }
}



