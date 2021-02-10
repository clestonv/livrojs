/**
 * Programa JavaScript que mostra promoção da Farmacia
 */
function mostraPromocao() {
    //cria referência aos elementos manipulados pelo programa
    let inMedicamento = document.getElementById('inMedicamento')
    let inPreco = document.getElementById('inPreco')
    let outMedicamento = document.getElementById('outMedicamento')
    let outPromocao = document.getElementById('outPromocao')

    // obtém conteúdo dos campos de texto
    let medicamento = inMedicamento.value
    let preco = Number(inPreco.value)

    // calcula o valor promocional
    desconto =  Math.floor(preco / 1)
    valorDesconto = desconto * 2
    //altera o conteúdo dos parágrafos de resposta
    outMedicamento.textContent = "Promoção de "+ medicamento
    outPromocao.textContent = "Leve 2 por apenas R$: "+ valorDesconto.toFixed(2)
}

// cria uma referência ao elemento btMostrar (botão)
let btMostrar = document.getElementById('btMostrar')
// registra um evento associado ao botão, para carregar a função
btMostrar.addEventListener('click', mostraPromocao)