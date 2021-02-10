function preencherEstrelas() {
    // cria referencia aos elementos html manipulados pela funcition
    var inNumero = document.querySelector('#inNumero');
    var outEspacos = document.querySelector('#outEspacos')

    // onbtém conteúdo do campo inNumero
    var num = Number(inNumero.value)
    
    if (num == 0 || isNaN(num)) {
        alert("Número Inválido...")
        inNumero.focus();
        return;
    }

    // declara variável que irá concatenar as estrelas 
    var estrelas = ""

    // cria um laço  de repetição de 1 até o número informado
    for (var i = 1; i <= num; i++ ) {
        if (i % 2 == 1) {
            // na posição impar do i: *
            estrelas = estrelas + "*";
        } else {
            // na posição par: -
            estrelas = estrelas + "-";
        }
    }

    // exibe as estrelas
    outEspacos.textContent = estrelas;
}

// cria referencia  ao botão e após associa function ao evento click
var btPreencher = document.querySelector('#btPreencher')
btPreencher.addEventListener('click', preencherEstrelas)