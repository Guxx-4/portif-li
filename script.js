// =====================================================
// PEGANDO OS ELEMENTOS DO HTML
// =====================================================

// Botão que muda o tema
const btnDarkMode = document.getElementById("btnDarkMode");

// Ícone do botão
const iconeTema = document.getElementById("iconeTema");

// Botão de voltar ao topo
const btnTopo = document.getElementById("btnTopo");


// =====================================================
// CARREGAMENTO DA PÁGINA
// =====================================================

// Espera a página terminar de carregar
window.addEventListener("load", function () {

    // Procura o loader
    const loader = document.getElementById("loader");

    // Adiciona a classe que faz o loader desaparecer
    loader.classList.add("esconder");

});


// =====================================================
// TEMA CLARO / ESCURO
// =====================================================

// Verifica se o usuário já tinha escolhido o tema escuro
const temaSalvo = localStorage.getItem("tema");


// Se o tema salvo for escuro
if (temaSalvo === "escuro") {

    // Adiciona a classe dark-mode ao body
    document.body.classList.add("dark-mode");

    // Troca o ícone para lua
    iconeTema.classList.remove("bi-sun-fill");

    iconeTema.classList.add("bi-moon-fill");

}


// =====================================================
// BOTÃO DE MUDAR TEMA
// =====================================================

btnDarkMode.addEventListener("click", function () {

    // Adiciona ou remove o modo escuro
    document.body.classList.toggle("dark-mode");


    // Verifica se o modo escuro está ativado

    if (document.body.classList.contains("dark-mode")) {

        // Troca o ícone de sol para lua

        iconeTema.classList.remove("bi-sun-fill");

        iconeTema.classList.add("bi-moon-fill");


        // Salva a escolha do usuário

        localStorage.setItem("tema", "escuro");

    } else {

        // Troca o ícone de lua para sol

        iconeTema.classList.remove("bi-moon-fill");

        iconeTema.classList.add("bi-sun-fill");


        // Salva o tema claro

        localStorage.setItem("tema", "claro");

    }

});


// =====================================================
// BOTÃO VOLTAR AO TOPO
// =====================================================

window.addEventListener("scroll", function () {

    // Verifica quanto a página foi rolada

    if (window.scrollY > 300) {

        // Mostra o botão

        btnTopo.style.display = "flex";

        btnTopo.style.alignItems = "center";

        btnTopo.style.justifyContent = "center";

    } else {

        // Esconde o botão

        btnTopo.style.display = "none";

    }

});


// =====================================================
// VOLTAR PARA O TOPO
// =====================================================

btnTopo.addEventListener("click", function () {

    // Volta para o topo suavemente

    window.scrollTo({

        top: 0,

        behavior: "smooth"

    });

});
