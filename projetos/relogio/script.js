// Função que atualiza o relógio
function atualizarRelogio(){

    // Pega a data e hora atual do computador
    let agora = new Date();

    // Pega as horas
    let horas = agora.getHours();

    // Pega os minutos
    let minutos = agora.getMinutes();

    // Pega os segundos
    let segundos = agora.getSeconds();

    // Se o número tiver apenas um dígito, adiciona um zero na frente
    horas = String(horas).padStart(2,"0");

    minutos = String(minutos).padStart(2,"0");

    segundos = String(segundos).padStart(2,"0");

    // Mostra o horário na tela
    document.getElementById("relogio").innerHTML =
        horas + ":" + minutos + ":" + segundos;

}

// Atualiza o relógio imediatamente ao abrir a página
atualizarRelogio();

// Atualiza novamente a cada 1 segundo (1000 milissegundos)
setInterval(atualizarRelogio,1000);
