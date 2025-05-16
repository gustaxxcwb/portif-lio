//funçao que vai calcular sua idade
function calculo(){
    //declaração das variáveis
    let anoNascimento = 0;
    let idade = 0;

    //entrada de dados do usuário e atribuição as variáveis
     anoNascimento = Number( window.prompt('Digite o ano em que você nasceu:'));

     //a variável diminiu seu ano de 2025 para descobrir sua idade
     idade = 2025 - anoNascimento;

     //mostra a sua idade
     alert("Sua idade é: " + idade);

     //verifica se a sua idade é maior ou menor que 18
     if (idade > 18){
        //caso seja maior que 18 mostra essa frase para o usuário
        alert("Você pode tirar carteira de motorista");
     } else {
        //caso seja menor que 18, mostra essa frase
        //variavel da diferença caso seja de menor.
        let dif = 18 - idade;
        //caso seja de menor, mostra essa frase
        alert("Você não pode tirar carteira de motorista, pois faltam: " + dif + " Anos para completar 18 anos");
     }
    
    
}