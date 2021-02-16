function repetirFrutas () {
    // referenciando elementos
    let inFruta = document.querySelector('#inFruta')
    let inQuantidade = document.querySelector('#inQuantidade')
    let outFrutas = document.querySelector('#outFrutas')

    // convertendo e obtendo conteudo dos campos
    let fruta = inFruta.value
    let quantidade = Number(inQuantidade.value)

    // declara variável que irá concatenar as frutas
    let mostraFrutas = ""

    for (let i = 1; i <= quantidade; i++ ) {
        if (i < quantidade) {
            // quando o valor for menor que i recebe o nome da fruta + *
            mostraFrutas += fruta + " * "
        } else {
            // quando a condição não for verdadeira recebe só a fruta
            mostraFrutas += fruta 
        }        
    }

    // exibe frutas
    outFrutas.innerHTML = mostraFrutas
    

}
// cria a referencia ao botão e após asssocia function ao evento click
let btMostrar = document.querySelector('#btMostrar')
btMostrar.addEventListener('click', repetirFrutas)
