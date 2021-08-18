// declara o vetor de escopo global que irá conter os números já apostados
let erros = [];

// gera um número aleatório entre 1 e 100
let sorteado = Math.floor(Math.random() * 100) + 1;

// declara constante com o número de chances
const chances = 6;

function apostarNumero() {
    // cria referencia ao campo de entrada e obtém seu conteúdo
    let inNumero = document.querySelector("#inNumero");
    let numero = Number(inNumero.value)

    // valida o número
    if (numero <= 0 || numero > 100 || isNaN(numero)) {
        alert("Informe um número válido...\nEx: 1 ou 2 ou 3");
        inNumero.focus();
        return;
    }

    // referencia espaços das saídas de dados
    let outDica = document.querySelector("#outDica");
    let outErros = document.querySelector("#outErros");
    let outChances = document.querySelector("#outChances");

    // se aposta do jogador for igual ao número sorteado
    if (numero == sorteado) {
        alert("Parabéns!! Voce Acertou!!!");
        // troca status dos botões
        btApostar.disabled = true;
        btJogar.className = "exibe";
        outDica.textContent = `Parabéns!! Número sorteado: ${sorteado}`;
    } else {
        // se número existe no vetor erros
        if (erros.indexOf(numero) >= 0) {
            alert("Voce já apostou o número " + numero + ". Tente outro...");
        } else {
            // adiciona número ao vetor
            erros.push(numero)
            // obtém tamanho do vetor
            let numErros = erros.length;
            // calcula o numero de chances
            let numChances = chances - numErros;
            // exibe número de erros, conteúdo do vetor e número de chances
            outErros.textContent = numErros + "\n (" + erros.join(",") + ")";
            outChances.textContent = numChances;
            if (numChances == 0) {
                alert("Suas chances acabaram...")
                btApostar.disabled = true;
                btJogar.className = "exibe";
                outDica.textContent = "Game Over!!! Número Sorteado: "+ sorteado;
            } else {
                // usa operador ternário (condicional) para mensagem da dica
                let dica = numero < sorteado ? "Maior" : "Menor";
                outDica.textContent = "Dica: Tente um número " + dica + " que " + numero;
            }
        }
    }
    // Limpa campo de entrada e posiciona cursor neste campo
    inNumero.value = "";
    inNumero.focus();
}

function jogarNovamente() {
    // recarrega a página
    location.reload();
}
// referenciar os botoes e adicionar o funcao click
let btApostar = document.querySelector("#btApostar")
btApostar.addEventListener("click", apostarNumero);

let btJogar = document.querySelector("#btJogar");
btJogar.addEventListener("click", jogarNovamente);



