/**
 * Programa JavaScript calcula valor a ser pago pelo cliente
 */

function valorPagar() {
    // cria referência aos elementos manipulados pelo programa
    let inValor = document.getElementById('inValor')
    let inMinutos = document.getElementById('inMinutos')
    let outValor = document.getElementById('outValor')

    // obtém conteúdo dos campos de texto
    let valor = Number(inValor.value)
    let tempo = Number(inMinutos.value)

    // calcula o valor á pagar
    let tempoFinal = tempo / 15
    let valorFinal = Math.ceil(tempoFinal) * valor
   
    // exibe o conteúdo no paragrafo de saida
    outValor.textContent = "Valor á Pagar R$: " +valorFinal.toFixed(2)
}

// cria referência ao btCalcular (botão)
let btCalcular = document.getElementById('btCalcular')
// registra um evento ao botão, para carregar a função
btCalcular.addEventListener('click', valorPagar)