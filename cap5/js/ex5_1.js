var pacientes = []; //Declara vetor global

function adicionarPaciente() {
    // cria referencia aos elementos de entrada e saida de dados da página
    let inPaciente = document.getElementById("inPaciente");
    let outLista = document.getElementById("outLista");

    let nome = inPaciente.value; // obtem nome do paciente

    // verifica preenchimento do nome do paciente
    if (nome == "") {
        alert("Inform o nome do paciente");
        inPacientel.focus();
        return;
    }

    pacientes.push(nome); // adiciona o nome no final do vetor

    let lista = ""; // string para concatenar pacientes

    // percorre os elementos do vetor
    for (i = 0; i < pacientes.length; i++) {
        lista += (i + 1) + "." + pacientes[i] + "\n";
    }

    // altera o conteudo da tag outLista
    outLista.textContent = lista;

    // limpa o campo e posiciona cursor em inPaciente
    inPaciente.value = "";
    inPaciente.focus();

}

function urgenciaPaciente() {
    // cria referencia aos elementos de entrada e saida de dados da página
    let inPaciente = document.getElementById("inPaciente");
    let outLista = document.getElementById("outLista");

    let nome = inPaciente.value; // obtem nome do paciente

    // verifica preenchimento do nome do paciente
    if (nome == "") {
        alert("Inform o nome do paciente");
        inPacientel.focus();
        return;
    }

    pacientes.unshift(nome); // adiciona o nome no incio do vetor

    let lista = ""; // string para concatenar pacientes

    // percorre os elementos do vetor
    for (i = 0; i < pacientes.length; i++) {
        lista += (i + 1) + "." + pacientes[i] + "\n";
    }

    // altera o conteudo da tag outLista
    outLista.textContent = lista;

    // limpa o campo e posiciona cursor em inPaciente
    inPaciente.value = "";
    inPaciente.focus();
}

function atenderPaciente() {
    // verifica se vetor pacientes está vazio
    if (pacientes.length == 0) {
        alert("Não há pacientes na lista de espera");
        inPaciente.focus();
        return;
    }

    // cria referencia aos elementos de saida de dados
    let outAtendimento = document.getElementById("outAtendimento");
    let outLista = document.getElementById("outLista")

    // remove paciente do inicio da fila (e obtém nome)
    let atender = pacientes.shift();

    // exibe nome do paciente em atendimento
    outAtendimento.textContent = atender

    // string para concatenar pacientes
    let lista = "";

    // percorre os elementos do vetor
    for(i = 0; i < pacientes.length; i++) {
        lista += (i + 1) + ".."+ pacientes[i] + "\n";
    }


    // altera o conteudo da tag ouLista
    outLista.textContent = lista
}

// cria referencia ao btAdicionar e associa function ao evento click
let btAdicionar = document.getElementById("btAdicionar");
btAdicionar.addEventListener("click", adicionarPaciente);

// criar referencia ao btUrgencia e associa function ao evento click
let btUrgencia = document.getElementById("btUrgencia");
btUrgencia.addEventListener("click", urgenciaPaciente);

// criar referencia ao btAtender e associa function ao evento click
let btAtender = document.getElementById("btAtender")
btAtender.addEventListener("click", atenderPaciente)