function calculaFuso () {
    // cria uma referência aos elementos da página
    let inHoraBrasil = document.getElementById('inHoraBrasil')
    let outHoraFranca = document.getElementById('outHoraFranca')

    // obtém e converte o conteúdo do campo inHoraBrasil
    let horaBrasil = Number(inHoraBrasil.value)

    // se não preencheu o Not-a-Number (NaN)
    if (inHoraBrasil.value == "" || isNaN(horaBrasil))  {
        alert('Informe a hora no Brasil corretamente')
        console.log(inHoraBrasil + horaBrasil)
        inHoraBrasil.focus()
        return;
    }

    let horaFranca = horaBrasil + 5;

    // se passar da 24 horas na França...
    if (horaFranca > 24) {
        horaFranca = horaFranca - 24; // subtrai 24
    }

    // exibe resposta (altera conteúdo do elemento outHoraFranca)
    outHoraFranca.textContent = "Hora na França: " + horaFranca.toFixed(2)
}


// cria uma referência ao elemento btExibir e registra evento associado a function
let btExibir = document.getElementById('btExibir')
btExibir.addEventListener('click', calculaFuso)