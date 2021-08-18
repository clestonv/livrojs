function gerandoTriangulo() {
    // referenciando elementos
    let inNumero = document.querySelector('#inNumero')
    let outTriangulo = document.querySelector('#outTriangulo')

    // convertendo e obtendo conteúdo dos campos
    let numero = Number(inNumero.value)

    // variavel de atribuicao
    let mostraTriangulo = ""

    for (let i = 0; i <= numero; i++) {
        for (let coluna = 0; coluna < i; coluna++) {
            mostraTriangulo += '*'
        }
        mostraTriangulo += '<br>'
    }

    outTriangulo.innerHTML = mostraTriangulo;
}


// referenciando o botao
let  btGerarTriangulo = document.querySelector('#btGerarTriangulo');
btGerarTriangulo.addEventListener('click', gerandoTriangulo )