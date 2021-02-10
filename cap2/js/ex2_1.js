/**
 * Programa JavaScript que exivbe o nome informado pelo usuário
 * no campo de edição
 */

 // Declara a função mostrarOla
 function mostrarOla(){
    //obtém o conteúdo do campo (com id=) nome
    const nome = document.getElementById('nome').value;
    //exibe no paragráfo (resposta): "Olá " e nome informado
    document.getElementById('resp').textContent = "Olá " + nome;
 }

 // cria uma referência ao botão (com id=) mostrar
 const mostrar = document.getElementById('mostrar');
 // registra para o botão "mostrar" um ouvinte para o evento click,
 // que ao ser clicado irá chamar a função mostraOla
 mostrar.addEventListener("click", mostrarOla)