let aleatorio = parseInt(Math.random() * 101)
let mostraResultado = document.querySelector("#resultado")
let jogador


function pensar() {

    jogador = Number(window.prompt("Digite um número entre 1 e 100"))

    if (jogador != aleatorio) {

        if(jogador > jogador) {
    mostraResultado.innerHTML = `<p>Você errou, tente um número MENOR!</p>`

        } else {
 mostraResultado.innerHTML = `<p>Você errou, tente um número MAIOR!</p>`

        }
    } else {

        mostraResultado.innerHTML = `<p>Parabéns, Você acertou!!</p>`
    }
}