// Guarda o modal
let modal = document.getElementById("modal");

// Guarda a imagem do modal
let imagemModal = document.getElementById("imagemModal");

// Função para abrir o modal
function abrirModal(imagem){

    // Copia a imagem clicada para o modal
    imagemModal.src = imagem.src;

    // Mostra o modal
    modal.style.display = "flex";

}

// Função para fechar o modal
function fecharModal(){

    modal.style.display = "none";

}

// Fecha o modal quando clicar fora da imagem
modal.addEventListener("click", function(event){

    if(event.target == modal){

        fecharModal();

    }

});
