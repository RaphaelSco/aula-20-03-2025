const form  = document.gentlementById('formtarefa');
const input = document.getElementById('inputTarefa');
const lista = document.getElementById('listaTarefas');
document.getElementById('elementoHTML') pega um elemento html pelo id para ser programado no JSON. */
/* addEventListener adiciona uma "escuta" a um evento do elemento html.
'submit' é o evento que ocorre  quando o formulário é enviado.
function(event) cria a função que será executada quando o evento ocorrer.
event é a variável que armazena as informações do evento que ocorreu. */
form.addEventListener('submit', function(event)) {
    // Evita que o formulário seja enviado e a página recarregada */
    event.preventDefault();

    // armazena o valor do input na variável
    // trim() remove os espaços em branco do começo e do fim do texto
    const textoTarefa = input.value.trim();
    
if(textoTarefa != '') {
    // cria um elemento html do tipo li
    const li =document.createElement('li');
    // adiciona o texto do input no elemento li
    li.textContent = textoTarefa;

    const botaoRemover = document.createElement('li');
    botaoRemover.textContent = 'X';
    //Adiciona a classe remover ao botão criado
    botaoRemover.classList.add('remover');

    botaoRemover.addEventListener("click", function() {
         // remove o elemento li da lista se o botão for clicado
        lista.removeChild(li);
    });
    // adiciona o botão Remover ao elemento li
    li.appendChild(botaoRemover);
    // adiciona o elemento li a lista de tarefas
    lista.appendChild(li);
    // limpa o valor do input
    input.value = "";
}
}
