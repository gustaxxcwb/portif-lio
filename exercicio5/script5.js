let aleatorio = parseInt(Math.random() * 101)
let mostraResultado = document.querySelector("#resultado")
let jogador
let tentativas = 0

function pensar() {

    jogador = Number(window.prompt("Digite um número entre 1 e 100"))

    if (jogador > aleatorio) {

        tentativas += 1;


        if(jogador > aleatorio) {
    mostraResultado.innerHTML += `<p> TENTATIVA ${tentativas}: Você tentou o numero <b>${jogador}, tente um número MENOR!</b></p>`

        } else {
 mostraResultado.innerHTML += `<p>TENTATIVA ${tentativas}: Você tentou o numero <b>${jogador}, tente um número MAIOR!</b></p>`

        }
    } else {

        mostraResultado.innerHTML = `<p><b>Parabéns, Você acertou o número!! ${aleatorio} em ${tentativas}.</b></p>`
    }
}