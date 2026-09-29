document.getElementById("formCadastro").addEventListener("submit", function(event) {
    event.preventDefault();

    let nome = document.getElementById("nome").value;
    let email = document.getElementById("email").value;
    let telefone = document.getElementById("telefone").value;
    let senha = document.getElementById("senha").value;
    let confirmarSenha = document.getElementById("confirmarSenha").value;

    console.log(nome);
    console.log(email);
    console.log(telefone);

    if (senha === confirmarSenha) {
        alert("Cadastro realizado com sucesso!");
    } else {
        alert("As senhas não coincidem!");
    }
});
