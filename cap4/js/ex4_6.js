function verificarPrimo() {
    // cria referência aos elementos da página
    var inNumero = document.getElementById("inNumero")
    var outResposta = document.getElementById("outResposta")

    var num = Number(inNumero.value);

    // verifica se preencheu corretamente o campo inNumero
    if (num == 0 || isNaN(num)) {
        alert("Número inválido...");
        inNumero.focus();
        return;
    }

    var numDivisores = 0; // declara e inicializa contador

    // percorre todos os possiveis divisores do número
    for (var i = 1; i <= num; i++) {
        // verifica se i (1, 2, 3, ...) é divisor do num
        
        if (num % i == 0) {
            numDivisores++ // se é incrementa o cotador
        }
    }

    // se possui apenas 2 divisores, é primo
    if (numDivisores == 2) {
        outResposta.textContent = `${num} È Primo`;
    } else {
        outResposta.textContent = `${num} Não é primo`;
    }
}

// referencia elemtno e após associa function ao evento click
var btVerificarPrimo = document.getElementById('btVerificarPrimo');
btVerificarPrimo.addEventListener('click', verificarPrimo)