/**
 * Programa JavaScript que converte a duração de um filme
 */
function converterDuracao(){
   //cria referência aos elementos da página
   let inTitulo = document.getElementById('inTitulo')
   let inDuracao = document.getElementById('inDuracao')
   let outTitulo = document.getElementById('outTitulo')
   let outResposta = document.getElementById('outResposta')

   // obtém conteúdos dos campos de entrada
   let titulo = inTitulo.value
   let duracao = Number(inDuracao.value)

   // arredonda para baixo o resultado da divisão
   let horas = Math.floor(duracao / 60)
   // obtém o resto da divisão entre os números
   let minutos = duracao % 60
   // altera o conteúdo dos paragrafos de resposta
   outTitulo.textContent = titulo
   outResposta.textContent = horas + " hora(s) e " + minutos + " minuto(s)"
}

// cria uma referência ao elemento btConverter (botão)
let btConverter = document.getElementById('btConverter')
// registra um evento associado ao botão, para carregar uma função
btConverter.addEventListener('click', converterDuracao)