/**
 * Código JavaScript do programa Peso Ideal
 */
function calcularPeso() {
    // cria referência aos elementos manipulados pela function
    let inNome = document.getElementById('inNome')
    let rbMasculino = document.getElementById('rbMasculino')
    let rbFeminino = document.getElementById('rbFeminino')
    let inAltura = document.getElementById('inAltura')
    let outResposta = document.getElementById('outResposta')

    // obtém o conteúdo dos campos de edição da página
    let nome = inNome.value
    let masculino = rbMasculino.checked;
    let feminino = rbFeminino.checked;
    let altura = Number(inAltura.value)

    // verifica se nome foi preenchido e sexo selecionado
    if (nome == "" || (masculino == false && feminino == false)) {
        alert('Por favor, informe o nome e selecione o sexo...');
        inNome.focus();
        return;
    }

    // se altura vazio (0) ou NaN: Not-a-Number (um texto foi informado, por exemplo)
    if (altura == 0 || isNaN(altura)) {
        alert("Por favor, informe a altura corretamente...")
        inAltura.focus();
        return;
    }
    
    // se masculino (significa se masculino == true)
    if (masculino) {
        let peso = 22 * Math.pow(altura, 2) // Math.pow eleva ao quadrado
        // apresenta a resposta (altera o conteúdo da linha outResposta) 
        outResposta.textContent = nome + ": Seu peso ideal é " + peso.toFixed(3) + "Kg";
    } else {
        let peso = 21 * Math.pow(altura, 2)
        // apresenta a resposta (altera o conteúdo da linha outResposta) 
        outResposta.textContent = nome + ": Seu peso ideal é " + peso.toFixed(3) + "Kg";
    }
    
}

// cria referência ao botão calcular
let btResultado = document.getElementById('btCalcular')
// registra evento associado a calcularPeso
btResultado.addEventListener('click', calcularPeso)

function limparCampos() {
    // limpa os conteúdos dos elementos
    document.getElementById('inNome').value = ""
    document.getElementById('rbMasculino').checked = false
    document.getElementById('rbFeminino').checked = false
    document.getElementById('inAltura').value = ""
    document.getElementById('outResposta').textContent = ""
    // posiciona (joga o foco) no elemento inNome
    document.getElementById('inNome').focus()
}

var btLimpar = document.getElementById('btLimpar')
btLimpar.addEventListener('click', limparCampos)