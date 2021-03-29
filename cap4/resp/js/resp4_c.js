// Programa para verificar se o número é Perfeito
function verificarPerfeicao () {
    let inNumero = document.querySelector("#inNumero")
    let outSoma = document.querySelector("#outSoma")
    let outResp = document.querySelector("#outResp")

    // Convertendo o para Numero
    let numero = Number(inNumero.value)

    //variveis de atribuição
    let divisores = ""
    let respNumero = 0

    // Looping para achar divisores
    for (let i = 0; i < numero; i++) {
        if (numero % i == 0) {
            divisores += `${i}, `
            respNumero += i
        } 

    }
    // Passar para o HTML
    outSoma.innerHTML = `Divisores de ${numero} : ${divisores} (Soma: ${respNumero})`

    // Conferir se Numero e igual a soma dos seus divisores
    if (numero == respNumero) {
        outResp.innerHTML = `${numero} É num Número Perfeito`
    } else {
        outResp.innerHTML = `${numero} Nao e num Número Perfeito`
    }
    

}

// Referencia o botão
let btVerificar = document.querySelector("#btVerificar")
btVerificar.addEventListener('click', verificarPerfeicao)