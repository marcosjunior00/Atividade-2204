const calcularFatorial = (e) => {
    e.preventDefault();
    const numero = parseInt(document.getElementById("numero").value);
    const resultado = document.getElementById("resultado");
    let fatorial = 1;

    if (numero <= 0) {
        resultado.innerHTML = "Número inválido! Digite um número maior do que 0.";
        return;
    } else {
        let numeros = [];
        numeros.push(numero);
        fatorial = numero;

        for (let i = numero - 1; i > 0; i--) {
            fatorial *= i;
            numeros.push(i);
        }

        resultado.innerHTML = `O fatorial de ${numero} é ${fatorial}. <br> Cálculo: ${numero}! - ${numeros.join(" x ")} = ${fatorial}`;
    }
};