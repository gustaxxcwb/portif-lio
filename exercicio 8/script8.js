
function verificarEstacao() {

    let mes = window.prompt("Digite o nome de um mês do ano:");

    mes = mes.toUpperCase();

    let estacao = "";

    if (mes == "DEZEMBRO" || mes == "JANEIRO" || mes == "FEVEREIRO") {
        estacao = "Verão";
        document.body.style.backgroundColor = "#FFD800"; 
    } else if (mes == "MARÇO" || mes == "ABRIL" || mes == "MAIO") {
        estacao = "Outono";
        document.body.style.backgroundColor = "#FF4500"; 
    } else if (mes == "JUNHO" || mes == "JULHO" || mes == "AGOSTO") {
        estacao = "Inverno";
        document.body.style.backgroundColor = "#000080"; 
    } else if (mes == "SETEMBRO" || mes == "OUTUBRO" || mes == "NOVEMBRO") {
        estacao = "Primavera";
        document.body.style.backgroundColor = "#228B22"; 
    } else {
        alert("Mês inválido. Tente novamente.");
        return;
    }

    alert(`O mês de ${mes} pertence à estação: ${estacao}`);
    document.getElementById("resultado").innerHTML = `<p>O mês de ${mes} pertence à estação: ${estacao}</p>`;

}
