var botaoAdicionar = document.querySelector("#adicionar-paciente");
botaoAdicionar.addEventListener("click", function(event){
    event.preventDefault(); //previne o comportamento padrao do evento (seria de carregar a página neste caso por se 
    //tratar de um formulário)

    var form = document.querySelector("#form-adiciona");

    //Obtem dados do Formulário
    var paciente = obtemPacienteDoForm(form);

    var erros = validaPaciente(paciente);

    if (erros.length > 0) {
        exibeMensagemDeErro(erros);
        return;
    }

    adicionaPacienteNaTabela(paciente);

    form.reset();
    var mensagemErro = document.querySelector("#mensagens-erro");
    mensagemErro.innerHTML = "";
})

function obtemPacienteDoForm (form) {

    var paciente = {
        nome: form.nome.value,
        peso: form.peso.value,
        altura: form.altura.value,
        gordura: form.gordura.value,
        imc: calculaImc(form.peso.value, form.altura.value)
    }

    return paciente;
}

function validaPaciente(paciente){
    var erros = [];

    if(paciente.nome.length == 0) {
        erros.push("O nome do paciente não pode ser em branco!");
    }

    if(!validaPeso(paciente.peso) || paciente.peso == 0) {
        erros.push("Peso é Inválido");
    }
    if(!validaAltura(paciente.altura) || paciente.altura == 0){
        erros.push("Altura é Inválida");
    }

    if(paciente.gordura == 0){
        erros.push("Gordura Inválida");
    }

    return erros;
}

function exibeMensagemDeErro(erros){
    var ul = document.querySelector("#mensagens-erro");
    ul.innerHTML = "";
    erros.forEach(function(erro){
        var li = document.createElement("li");
        li.textContent = erro;
        ul.appendChild(li);
    });
}

function adicionaPacienteNaTabela(paciente){
    //monta Linha(Tr) e Célula(Td) e Adiciona Célula na Tabela
    var pacienteTr = montaTr(paciente);

    //seleciona tabela no html
    var tabela = document.querySelector("#tabela-pacientes");

    //adiciona Linha com os Dados na tabela
    tabela.appendChild(pacienteTr);
}

function montaTr(paciente) {
    var pacienteTr = document.createElement("tr");
    pacienteTr.classList.add("paciente");

    pacienteTr.appendChild(montaTd(paciente.nome, "info-nome"));
    pacienteTr.appendChild(montaTd(paciente.peso, "info-peso"));
    pacienteTr.appendChild(montaTd(paciente.altura, "info-altura"));
    pacienteTr.appendChild(montaTd(paciente.gordura, "info-gordura"));
    pacienteTr.appendChild(montaTd(paciente.imc, "info-imc"));

    return pacienteTr;
}

function montaTd (dado, classe) {
    var td = document.createElement("td");
    td.textContent = dado;
    td.classList.add(classe);

    return td;
}

