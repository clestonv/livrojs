/**
 * Programa Número Decrescente
 */
function listarNumeros() {
    // referenciar os elementos que a function irá manipular
    const inNumero = document.getElementById('inNumero')
    const outResposta = document.getElementById('outResposta')
    const outError = document.getElementById('outError')
    
    // obtem numero informado
    const numero = Number(inNumero.value)

    // verifica validade do número
    if(numero == 0 || isNaN(numero)){
        outError.textContent = 'Número invalido'
        inNumero.focus()
    }

    // inicializar variavel resposta
    let resposta = "Entre o "+numero+" e 1: ";
    let i = numero
    // cria um for descrecente
    for( i; i > 1; i--) {
        resposta = resposta + i + '\n'
    }
    resposta = resposta + i + "."

    // altera o conteúdo de outResposta
    outResposta.textContent = resposta;
}

// Referenciar botão de ação
const btDecrescer = document.getElementById('btDecrescer')
btDecrescer.addEventListener('click', listarNumeros)