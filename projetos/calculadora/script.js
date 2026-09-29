function calcular() {
    let num1 = Number(document.getElementById("num1").value);
    let num2 = Number(document.getElementById("num2").value);
    let operacao = document.getElementById("operacao").value;
    let resultado;

    switch (operacao) {
        case "+":
            resultado = num1 + num2;
            break;

        case "-":
            resultado = num1 - num2;
            break;

        case "*":
            resultado = num1 * num2;
            break;

        case "/":
            if (num2 === 0) {
                document.getElementById("resultado").innerHTML =
                    "Resultado: Não é possível dividir por zero!";
                return;
            }
            resultado = num1 / num2;
            break;
    }

    document.getElementById("resultado").innerHTML =
        "Resultado: " + resultado;
}
