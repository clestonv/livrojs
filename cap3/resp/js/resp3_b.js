/**
 * Programa para verificar velocidade
 */

function verificarVelo() {
    // referênciando elementos do página
    const veloPermitida = document.getElementById('veloPermitida')
    const veloCondutor = document.getElementById('veloCondutor')
    const tri = document.getElementById('tri')
    const resposta = document.getElementById('resposta')

    // converte o valor para numerico
    const veloPer = Number(veloPermitida.value)
    const veloCond = Number(veloCondutor.value)

    // obtendo o valor de 20% maior da velocidade
    const veloAcima = veloPer + (veloPer * 0.20)
    console.log(veloAcima)
    // se não preencheu ou Not-a-Number(NaN)
    if (veloPer == "" || veloCond == "") {
        tri.textContent = 'O Campo está vazio'
        tri.style.fontFamily = 'monospace'
        tri.style.fontWeight = 'bold'
        tri.style.fontSize = 'x-large'
        tri.style.textAlign = 'center'
        tri.style.backgroundColor = '#3e926a'
        tri.style.color = '#FFF'        
        tri.style.padding = '20px'
        tri.style.width = '350px'
        veloPermitida.focus()
        return
    } else if (isNaN(veloPer) || isNaN(veloCond)) {
        tri.textContent = 'Caractere incorreto use números'
        tri.style.fontFamily = 'monospace'
        tri.style.fontWeight = 'bold'
        tri.style.fontSize = 'x-large'
        tri.style.textAlign = 'center'
        tri.style.backgroundColor = 'red'
        tri.style.color = '#FFF'        
        tri.style.padding = '20px'
        tri.style.width = '350px'
        veloPermitida.focus()
        return
    }

    // se menor ou igual
    if (veloCond <= veloPer ) {
        resposta.textContent = 'Situação: Sem Multa'
    }

    // se velocidade até 20% maior que o permitido
    if (veloCond > veloPer && veloCond <= veloAcima) {
        resposta.textContent = 'Situação: Multa Leve'
    } 

    // se velocidade for acima dos 20% permitido
    if (veloCond > veloAcima) {
        resposta.textContent = 'Stuação: Multa Grave'
    }
}

const btVerificar = document.getElementById('btVerificar')
btVerificar.addEventListener('click', verificarVelo)