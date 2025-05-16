//calculadora simples coa as 5 operações basícas:
//Adição, Subtração, Multiplicação, Divisão e Divisçao com sobra;
let num1;
let num2;
let resultado

function sobra () {
   num1 = Number (window.prompt("Digite o primeiro número"));
   num2 = Number (window.prompt("Digite o segundo número"));

      resultado = num1 % num2;

      alert("O resultado é: " + resultado + ".");
}  

function multiplicacao () {
   num1 = Number (window.prompt("Digite o primeiro número"));
   num2 = Number (window.prompt("Digite o segundo número"));

      resultado = num1 * num2;

      alert("O resultado é: " + resultado + ".");

} 


function  subtracao() {
   num1 = Number (window.prompt("Digite o primeiro número"));
   num2 = Number (window.prompt("Digite o segundo número"));

      resultado = num1 - num2;

      alert("O resultado é: " + resultado + ".");

} 

function  divisao() {
   num1 = Number (window.prompt("Digite o primeiro número"));
   num2 = Number (window.prompt("Digite o segundo número"));

      resultado = num1 / num2;

      alert("O resultado é: " + resultado + ".");

} 