/**
 * Programa para mostrar se o número é par ou ímpar
 */
function imparPar() {
    // criando referência aos elementos da página
    var inNumero = document.getElementById('inNumero')
    var resposta = document.getElementById('resposta')  
    var tri = document.getElementById('tri')  

    // Limpar mensagem em caso de uma segunda execução
    resposta.textContent = "Resposta: "
    
    // converte para numero o valor obtido do campo numero
    var numero = Number(inNumero.value)

    // se não preencheu ou Not-a-Number (NaN)
    if (numero == "") {
        tri.textContent = "O Campo está vazio";
        tri.style.color = "#FFF"   
        tri.style.background ="green" 
        inNumero.focus()
        return
    } else if (isNaN(numero)) { 
        inNumero.value = ''       
        tri.textContent = "O caractere  está incorreto"
        tri.style.color = "#FFF"   
        tri.style.background ="red"      
        inNumero.focus()
        return
    }

    // se o numero é divisivel por 2
    if (numero % 2 == 0) {
        resposta.textContent = "Resposta: " + numero +" é Par"
        inNumero.value = ''
    } else {
        resposta.textContent = "Resposta: " + numero +" é Ímpar"
        inNumero.value = ''
    }
}

const btRevelar = document.getElementById('btRevelar')
btRevelar.addEventListener('click', imparPar)