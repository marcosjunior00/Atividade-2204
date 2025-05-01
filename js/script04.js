const calcularPares = (e) => {
    e.preventDefault();
    const limite = parseInt(document.getElementById("limite").value);
    const resultado = document.getElementById("resultado");
    resultado.innerHTML = "";

    let numeros = [];

    for (let i = 1; i <= limite; i++) {
        if (i % 2 === 0) {
            numeros.push(i);
        }
    }

    resultado.innerHTML = `Os números pares de 1 a ${limite} são: ${numeros.join(", ")}`;
};