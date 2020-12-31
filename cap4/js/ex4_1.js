function mostrarTabuada() {
    //cria referencia aos elementos da página
    const inNumero = document.getElementById('inNumero')
    const outTabuada = document.getElementById('outTabuada')
    const outError = document.getElementById('outError')
    
    //converte conteúdo do campo inNumero
    const numero = Number(inNumero.value)
    
    // valida o número
    if (numero == 0 || isNaN(numero)) {
        outError.textContent = 'Informe um número válido...';
        // estiliza a resposta
        outError.style.display = 'inline-block'
        outError.style.fontWeight = 'bold'
        outError.style.fontSize = 'x-large'
        outError.style.textAlign = 'center'
        outError.style.background = '#3E926A'
        outError.style.color = '#FFF'
        outError.style.padding = '20px'
        outError.style.width = '350px'
        inNumero.focus();
        return;
    }
    
    // cria uma variável do tipo String, que irá concatenar a resposta
    let resposta = '';
    
    // cria um laço de repetição
    for (let i = 1; i <= 10; i++) {
        // a variavel resposta vai acumulando os novos conteudos
        resposta = resposta + numero + " x " + i + " = " + numero * i + "\n"
    }
    
    // o conteudo da tag pre é alterado para exibir a tabuada do num
    outTabuada.textContent = resposta;
}

/***
* REFERENCIA AO BOTÃO
***/
const btMostrar = document.getElementById('btMostrar')
btMostrar.addEventListener('click', mostrarTabuada)