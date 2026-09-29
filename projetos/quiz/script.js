// Todas as perguntas do quiz
let perguntas = [

{
    pergunta:"1. Qual linguagem é usada para estilizar páginas?",

    respostas:["HTML","CSS","JavaScript","Python"],

    correta:1
},

{
    pergunta:"2. Qual linguagem cria a estrutura da página?",

    respostas:["CSS","JavaScript","HTML","Java"],

    correta:2
},

{
    pergunta:"3. Qual linguagem é usada para criar páginas web?",

    respostas:["HTML","CSS","Java","Python"],

    correta:0
},

{
    pergunta:"4. Qual tag cria um parágrafo?",

    respostas:["<p>","<h1>","<div>","<img>"],

    correta:0
},

{
    pergunta:"5. Qual propriedade muda a cor do texto no CSS?",

    respostas:["background","font","color","border"],

    correta:2
}

];

// Guarda a pergunta atual
let atual = 0;

// Guarda os acertos
let pontos = 0;

// Mostra a primeira pergunta
mostrarPergunta();

// Quando clicar no botão
document.getElementById("proximo").addEventListener("click",proximaPergunta);

// Função para mostrar as perguntas
function mostrarPergunta(){

    document.getElementById("pergunta").innerHTML =
    perguntas[atual].pergunta;

    let respostas = document.getElementById("respostas");

    respostas.innerHTML = "";

    // Cria as alternativas automaticamente
    for(let i=0;i<perguntas[atual].respostas.length;i++){

        respostas.innerHTML +=

        `<label>

            <input type="radio" name="resposta" value="${i}">

            ${perguntas[atual].respostas[i]}

        </label>`;

    }

}

// Vai para a próxima pergunta
function proximaPergunta(){

    let marcada = document.querySelector("input[name='resposta']:checked");

    if(marcada == null){

        alert("Escolha uma resposta!");

        return;

    }

    // Soma ponto se acertou
    if(Number(marcada.value) == perguntas[atual].correta){

        pontos++;

    }

    atual++;

    // Ainda existem perguntas
    if(atual < perguntas.length){

        mostrarPergunta();

    }

    // Terminou o quiz
    else{

        let mensagem = "";

        if(pontos == 5){

            mensagem = "Excelente!";

        }

        else if(pontos >=3){

            mensagem = "Bom trabalho!";

        }

        else{

            mensagem = "Continue estudando!";

        }

        document.querySelector(".container").innerHTML =

        `<h2>Quiz Finalizado</h2>

        <h3>Você acertou ${pontos} de ${perguntas.length} perguntas.</h3>

        <p>${mensagem}</p>

        <a href="../../index.html" class="voltar">← Voltar ao portfólio</a>`;

    }

}
