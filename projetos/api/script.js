// Função que busca os usuários da API
function buscarUsuarios(){

    // Faz a requisição para a API
    fetch("https://jsonplaceholder.typicode.com/users")

    // Converte a resposta para JSON
    .then(resposta => resposta.json())

    // Recebe os dados
    .then(dados =>{

        let usuarios = document.getElementById("usuarios");

        usuarios.innerHTML = "";

        // Percorre todos os usuários
        dados.forEach(usuario =>{

            usuarios.innerHTML += `

                <div class="card">

                    <h3>${usuario.name}</h3>

                    <p><strong>E-mail:</strong> ${usuario.email}</p>

                    <p><strong>Cidade:</strong> ${usuario.address.city}</p>

                </div>

            `;

        });

    })

    // Caso aconteça algum erro
    .catch(() =>{

        document.getElementById("usuarios").innerHTML =

        "<p>Erro ao conectar com a API.</p>";

    });

}
