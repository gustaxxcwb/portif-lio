function somar(){
    let num1 = 0;
    let num2 = 0;

     num1 = Number( window.prompt('Digite um número'));
     num2 = Number( window.prompt('Digite outro número'));

    let soma = num1 + num2;

    alert(soma);

    if(soma > 10) {
        alert("O resultado é maior que 10");
    } else {
        alert("Não é maior que 10");
    }
}     