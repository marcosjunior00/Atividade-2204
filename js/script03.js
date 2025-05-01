const verificarCategoria = (e) => {
    e.preventDefault();
    const idade = parseInt(document.getElementById("idade").value);
    const resultado = document.getElementById("resultado");
    let categoria = "";

    if (idade >= 0 && idade <= 12) {
        categoria = "Criança";
    } else if (idade >= 13 && idade <= 17) {
        categoria = "Adolescente";
    } else if (idade >= 18 && idade <= 59) {
        categoria = "Adulto";
    } else if (idade >= 60) {
        categoria = "Idoso";
    } else {
        categoria = "Idade inválida";
    }

    resultado.innerHTML = `A categoria é: ${categoria}`;
};