var botaoAdicionar = document.querySelector("#adicionar-paciente");
botaoAdicionar.addEventListener("click", function(evento){
    evento.preventDefault();
    
    var form = document.querySelector("#form-adiciona");

    var paciente = obtemPacienteFormulario(form);

    var erros = validaPaciente(paciente)
    console.log(erros)
    if(erros.length> 0) {
       exibirMensagensErro(erros);
        return;
    }

    adicionaPacienteTabela(paciente);

    form.reset();

    var mensagensErro = document.querySelector("#mensagens-erro");
    mensagensErro.textContent ="";
});

function adicionaPacienteTabela(paciente) {
    var pacienteTr = montaTr(paciente);
    var tabela = document.querySelector("#tabela-pacientes");
    tabela.appendChild(pacienteTr);
}

function exibirMensagensErro (erros) {
    var ul = document.querySelector("#mensagens-erro");
    ul.innerHTML = ""
    erros.forEach(function(erro) {
        var li = document.createElement("li");
        li.textContent = erro;
        ul.appendChild(li);
        
    });
}

function obtemPacienteFormulario(form) {

    var paciente = {
        nome: form.nome.value,
        peso: form.peso.value,
        altura: form.altura.value,
        gordura: form.gordura.value,
        imc: calculaImc(form.peso.value, form.altura.value)
    }

    return paciente;
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
    td.classList.add(classe);
    td.textContent = dado;
        
    return td
}

function validaPaciente (paciente) {

    var erros = [];

    if(paciente.nome.length == 0) {
        erros.push("O nome n??o pode est?? em branco")
    }

    if(!validaPeso(paciente.peso)) {
        erros.push("O Peso ?? inv??lido!")
    }

    if(!validaAltura(paciente.altura)) {
        erros.push("Altura ?? inv??lida!")
    }

    if(paciente.gordura.length == 0) {
        erros.push("O gordura n??o pode est?? em branco")
    }

    if(paciente.peso.length == 0) {
        erros.push("O peso n??o pode est?? em branco")
    }

    if(paciente.altura.length == 0) {
        erros.push("A altura n??o pode est?? em branco")
    }

    return erros
}
