function calcular(){
    let num1
    let contador = 0
    let MostraResultado = document.getElementById(`resultado`)
    num1 = Number(window.prompt('Digite um numero:'))
    
    while (contador <= num1*10) {
     
    MostraResultado.innerHTML += `${contador} &#x1F449 `;
        contador += num1
    MostraResultado.innerHTML += `&#x1F3C1`;
}
}

function contagem() {

    let MostraResultado = document.getElementById(`resultado`)

    MostraResultado.innerHTML =`<p><b> Contando de 1 ate 10</b></p>`

    let contador = 10; 
    
    while (contador >= 1) {
        let numero = contador % 2;
 
    if (numero == 0) {
         MostraResultado.innerHTML += `${contador} &#x1F449 `;
    }else{
          MostraResultado.innerHTML += `<mark> ${contador} </mark> &#x1F449 `;
    }
    contador-=1;
}

    MostraResultado.innerHTML += `&#x1F3C1`;
}

function contar () {

    let MostraResultado = document.getElementById(`resultado`)

    MostraResultado.innerHTML =`<p><b> Contando de 1 ate 10</b></p>`

    let contador = 1; 
    
    while (contador <= 10) {
        let numero = contador % 2;
 
    if (numero == 0) {
         MostraResultado.innerHTML += `<mark> ${contador} </mark> &#x1F449 `;
    }else{
          MostraResultado.innerHTML += `${contador} &#x1F449 `;
    }
    contador+=1;
}

    MostraResultado.innerHTML += `&#x1F3C1`;
}


let MostraResultado = document.querySelector("#resultado");
let num1
let num2
let dife = num1 - num2 

function diferenca(){
    num1 = Number(window.prompt('Digite um numero:'));
    num2 = Number(window.prompt('Digite outro número:'));
    if (num1 < num2){
        MostraResultado.innerHTML += `<p>o numero maior é ${num2}</p>`;
       

    

    }
    else {
        MostraResultado.innerHTML += `<p>o numero maior é ${num1}</p>`;

    


    }

   
}