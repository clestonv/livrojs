/**
 * Código JavaScript do programa Situação do Aluno
 */

function calcularMedia() {
    // cria referência aos elementos da página
    let inNome = document.getElementById('inNome')
    let inNota1 = document.getElementById('inNota1')
    let inNota2 = document.getElementById('inNota2')
    let outSituacao = document.getElementById('outSituacao')
    let outMedia = document.getElementById('outMedia')

    // obtém os conteúdos dos campos de edição da página
    let nome = inNome.value 
    let nota1 = Number(inNota1.value)
    let nota2 = Number(inNota2.value)

    // calcula a Média da notas
    let media = (nota1 + nota2) / 2

    // apresenta a média  (altera o conteúdo do elemento outMedia)
    outMedia.textContent = "Média das Notas: "+ media.toFixed(1)

    // cria a condição 
    if (media >= 7) { // se aprovado
        // altera o texto e estilo da cor do elemento outSituacao
        outSituacao.textContent = "Parabéns "+ nome +"... Você foi aprovado(a)!!!"
        outSituacao.style.color = "blue"
    } else if (media >= 4) { // em exame
        outSituacao.textContent = "Atenção ! " +nome+ " VocÊ está em exame"
        outSituacao.style.color =  "green"
    }else { // se reprovado
        outSituacao.textContent = "Ops " + nome + "... Você foi reprovado(a)"
        outSituacao.style.color = "red"
    }

}

// cria uma referência ao elemento btResultado (botão)
let btResultado = document.getElementById('btResultado')
// registra um evento associado ao botão, para carregar uma função
btResultado.addEventListener('click', calcularMedia )