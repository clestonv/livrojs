/**
 * Programa Raiz Quadrada 
 */
function calculaRaiz() {
    // cria uma referência aos elementos da página
    let inNumero = document.getElementById('inNumero')
    let outResposta = document.getElementById('outResposta')

    let numero = Number(inNumero.value)

    // se não preencheu ou Not-a-Number (NaN)
    if (numero == 0 || isNaN(numero)) {
        alert('Informe um número válido...')
        console.log(numero + inNumero)
        inNumero.focus()
        return;
    }

    let raiz = Math.sqrt(numero) // calcula raiz quadrada do número

    // se o valor da variável raiz igual a este valor arredondado  para baixa...
    if (raiz == Math.floor(raiz)) {
        outResposta.textContent = "Raiz: " + raiz; // Mostra a raiz
    } else {
    // senão, exibe mensagem indicando que não há raiz exata
    outResposta.textContent = "Não há raiz exata para " + numero
    }

}

// cria referência ao elemento btExibir e registra evento que irá carregar
let btExibir = document.getElementById('btExibir')
btExibir.addEventListener('click', calculaRaiz)