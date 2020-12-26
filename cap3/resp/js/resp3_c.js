/**
 * Programa Paquimetro
 * TABELA
 * Valor | Tempo (min)
 * 1,00  | 30
 * 1,75  | 60
 * 3,00  | 120
 */

 function paquimetro () {
    // referencia elementos da página
    const inValor = document.getElementById('inValor')
    const outTempo = document.getElementById('outTempo')
    const outTroco = document.getElementById('outTroco')
    const tri = document.getElementById('tri')

    // pegando o valor do input
    const texto = inValor.value
    // convertendo para numero
    const valor = Number(inValor.value)

    // se numero maior que 3
    if (valor >= 3 ) {
        const troco = valor - 3
        outTempo.textContent = 'Tempo: 120 min'
        outTroco.textContent = 'Troco: R$'+ troco.toFixed(2)
    } else if (valor >= 1.75 ) {
        const troco = valor - 1.75
        outTempo.textContent = 'Tempo: 60 min'
        outTroco.textContent = 'Troco: R$'+ troco.toFixed(2)
    } else if (valor >= 1 ) {
        const troco = valor - 1
        outTempo.textContent = 'Tempo: 30 min'
        outTroco.textContent = 'Troco: R$'+ troco.toFixed(2)
    } else {
        tri.textContent = 'Valor ('+ texto +') insuficiente'
        tri.style.fontFamily = 'monospace'
        tri.style.fontWeight = 'bold'
        tri.style.fontSize = 'x-large'
        tri.style.textAlign = 'center'
        tri.style.backgroundColor = 'green'
        tri.style.color = '#FFF'        
        tri.style.padding = '20px'
        tri.style.width = '350px'
        veloPermitida.focus()
        return
    }
    

 }

 const btDeposito = document.getElementById('btDeposito')
 btDeposito.addEventListener('click', paquimetro)