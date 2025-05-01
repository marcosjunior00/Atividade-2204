let numeroAleatorio = 0;

const reiniciar = () => {
    numeroAleatorio = 0;
    document.getElementById("resultado").innerHTML = "";
    document.getElementById("numero").value = "";
    document.getElementById("numero").focus();
}

const verificarPalpite = (e) => {
    e.preventDefault();
    const numero = parseInt(document.getElementById("numero").value);
    const resultado = document.getElementById("resultado");
    
    if (!numeroAleatorio) numeroAleatorio = Math.floor(Math.random() * 10) + 1;

    if (numero == numeroAleatorio) {
        let tempoRestante = 10;
        const intervalo = setInterval(() => {
            if (tempoRestante > 0) {
                tempoRestante--;
                resultado.innerHTML = `Você acertou! O número era ${numeroAleatorio}. Reiniciando em ${tempoRestante} segundos...`;
            } else {
                clearInterval(intervalo);
                reiniciar();
            }
        }, 1000);
    } else {
        if (numero < numeroAleatorio) {
            resultado.innerHTML = `O número ${numero} é menor que o número aleatório.`;
        } else if (numero > numeroAleatorio) {
            resultado.innerHTML = `O número ${numero} é maior que o número aleatório.`;
        }
    }
}
