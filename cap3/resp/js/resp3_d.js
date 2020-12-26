    /**
Programa Javascript para descrobri qual triângulo
    Equilátero (3 lados iguais)
    Isóceles (2 lados iguais)
    Escaleno (3 lados diferentes).
**/

function verificaTriangulo() {
    // referencia elementos da página
    const ladoA = document.getElementById("ladoA")
    const ladoB = document.getElementById("ladoB")
    const ladoC = document.getElementById("ladoC")
    const resp = document.getElementById("resp")
    const tri = document.getElementById("tri")
    
    // converter para number
    const num1 = Number(ladoA.value)
    const num2 = Number(ladoB.value)
    const num3 = Number(ladoC.value)

    // se não preencheu ou Not-a-Number(NaN)
    if (isNaN(num1) || isNaN(num2) || isNaN(num3) ) {
        tri.textContent = 'Caractere inválido'
        // limpa os campos
        ladoA.value = ""
        ladoB.value = ""
        ladoC.value = ""
        // estiliza a resposta
        tri.style.fontWeight = 'bold'
        tri.style.fontSize = 'x-large'
        tri.style.textAlign = 'center'
        tri.style.background = '#3e926a'
        tri.style.color = '#FFF'
        tri.style.padding = '20px'
        tri.style.width = '350px'
        ladoA.focus()
        return
    } else if (num1 == "" || num2 == "" || num3 == "") {
        tri.textContent = 'O Campo está vazio'
        ladoA.focus()
        return
    } else if (num1 == num2 && num2 == num3) {
        resp.textContent = "Tipo: Equilátero"
    } else if (( num1 == num2 && num1 != num3)||(num2 == num3 && num3 != num1)||(num3 == num1 && num3 != num2)) {
        resp.textContent = "Tipo: Isóceles"
    } else if (num1 != num2 && num1 != num3 && num3 != num2) {
        resp.textContent = "Tipo: Escaleno"
    }
}

// referência o botão pelo id
const btMostrar = document.getElementById("btMostrar")
btMostrar.addEventListener("click", verificaTriangulo)