var pacientes = document.querySelectorAll(".paciente"); //pegando todos os pacientes

for (i = 0; i < pacientes.length; i++) { //iterando por cada paciente para fazer o calculo do IMC

    var paciente = pacientes[i]; //passando por cada index para calcular e modificar a tabela
    
    var tdPeso = paciente.querySelector(".info-peso");
    var peso = tdPeso.textContent; //conteudo de texto Peso

    var tdAltura = paciente.querySelector(".info-altura");
    var altura = tdAltura.textContent; //conteudo de texto Altura

    var tdImc = paciente.querySelector(".info-imc");

    pesoEhValido = validaPeso(peso);
    alturaEhValida = validaAltura(altura);

    if (!validaPeso(peso)) {
       pesoEhValido = false;
       tdPeso.textContent = "Peso Inválido!";
       paciente.classList.add("paciente-invalido")
    }

    if (!validaAltura(altura)) {
        alturaEhValida = false;
        tdAltura.textContent = "Altura Inválida!";
        paciente.classList.add("paciente-invalido")
    }

    if (pesoEhValido && alturaEhValida) {
        var imc = calculaImc(peso, altura);
        tdImc.textContent = imc;
    }
}

function calculaImc (peso, altura) {
    var imc = 0;
    imc = peso / (altura*altura);
    return imc.toFixed(2);
}

function validaPeso(peso) {
    if (peso >= 0 && peso <= 1000){
        return true;
    } else {
        return false;
    }
}

function validaAltura(altura) {
    if (altura >= 0 && altura <= 3.00){
        return true;
    } else {
        return false;
    }
}
