function previsaoChinchilas () {
    // referenciando elementos
    let inChinchilas = document.querySelector('#inChinchilas')
    let inAnos = document.querySelector('#inAnos')
    let outResp = document.querySelector('#outResp')
    
    // convertendo e obtendo conteúdo dos campos
    let chinchilas = Number(inChinchilas.value)
    let anos = Number(inAnos.value)
   
    // variavel de atribuição
    let mostraProjecao = ""
    let totalChin = 0

    for (let i = 1; i <= anos; i++ ){
        if (i == 1 ) {
            totalChin = i * chinchilas
        } else {
            totalChin = 3 * totalChin
        }
        
        mostraProjecao += `${i}º Ano: ${totalChin} Chinchilas <br>`
    }

    outResp.innerHTML = mostraProjecao
}

// referenciando o botão
let btMostrar = document.querySelector('#btMostrar')
btMostrar.addEventListener('click', previsaoChinchilas)