/**
 * Programa JavaScript que mostre o valor da promoção na compra de 3
 * produtos
 */

 function mostraPromocao () {
     // cria referência aos elementos manipulados pelo programa
     let inProduto = document.getElementById('inProduto')
     let inPrecoProduto = document.getElementById('inPrecoProduto')
     let outPromocao = document.getElementById('outPromocao')
     let outPreco = document.getElementById('outPreco')

     // obtém conteúdo dos campos
     let produto = inProduto.value 
     let precoProduto = Number(inPrecoProduto.value)

     // calcula os produtos
    let precoPromocao = precoProduto * 0.50
    let precoTotalPromocao = precoProduto * 2 + precoPromocao

    // exibe o conteúdo no paragrafo de saida
    outPromocao.textContent = produto + " - Promoção: Leve 3 por R$: "+ precoTotalPromocao.toFixed(2)
    outPreco.textContent = "O 3º Produto sai apenas por R$: "+ precoPromocao.toFixed(2)   
 }

 //cria referência ao elemento btPromocao
 let btPromocao = document.getElementById('btPromocao')
 // associa a função ao botão
 btPromocao.addEventListener('click', mostraPromocao)