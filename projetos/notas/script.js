function adicionarAluno(){

    let nome = document.getElementById("nome").value;
    let nota1 = Number(document.getElementById("nota1").value);
    let nota2 = Number(document.getElementById("nota2").value);

    if(nome == "" || isNaN(nota1) || isNaN(nota2)){
        alert("Preencha todos os campos!");
        return;
    }

    let media = (nota1 + nota2) / 2;

    let situacao = "";

    if(media >= 7){
        situacao = "Aprovado";
    }
    else if(media >= 5){
        situacao = "Recuperação";
    }
    else{
        situacao = "Reprovado";
    }

    let tabela = document.getElementById("tabelaAlunos");

    tabela.innerHTML += `
        <tr>
            <td>${nome}</td>
            <td>${nota1}</td>
            <td>${nota2}</td>
            <td>${media.toFixed(1)}</td>
            <td>${situacao}</td>
        </tr>
    `;

    document.getElementById("nome").value = "";
    document.getElementById("nota1").value = "";
    document.getElementById("nota2").value = "";
}
