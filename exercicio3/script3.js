//calculadora simples coa as 5 operações basícas:
//Adição, Subtração, Multiplicação, Divisão e Divisçao com sobra;
let num1;
let num2;
let resultado;
let nu;

function sobra () {
   num1 = Number (window.prompt("Digite o primeiro número"));
   num2 = Number (window.prompt("Digite o segundo número"));

      resultado = num1 % num2;

      nu = resultado % 2;

      alert("O resultado é: " + resultado + ".");
      
      if (nu == 0){
         alert("este número é par");
      }
      else {
         alert("este número é impar");
      }



}  

function multiplicacao () {
   num1 = Number (window.prompt("Digite o primeiro número"));
   num2 = Number (window.prompt("Digite o segundo número"));

      resultado = num1 * num2;
         
       nu = resultado % 2;

      alert("O resultado é: " + resultado + ".");
      
      if (nu == 0){
         alert("este número é par");
      }
      else {
         alert("este número é impar");
      } 
   }

function  subtracao() {
   num1 = Number (window.prompt("Digite o primeiro número"));
   num2 = Number (window.prompt("Digite o segundo número"));

      resultado = num1 - num2;

       nu = resultado % 2;

      alert("O resultado é: " + resultado + ".");
      
      if (nu == 0){
         alert("este número é par");
      }
      else {
         alert("este número é impar");
      }
} 

function  divisao () {
   num1 = Number (window.prompt("Digite o primeiro número"));
   num2 = Number (window.prompt("Digite o segundo número"));

      resultado = num1 / num2;

       nu = resultado % 2;

      alert("O resultado é: " + resultado + ".");
      
      if (nu == 0){
         alert("este número é par");
      }
      else {
         alert("este número é impar");
      }
} 

function  adicao () {
   num1 = Number (window.prompt("Digite o primeiro número"));
   num2 = Number (window.prompt("Digite o segundo número"));

      resultado = num1 + num2;

       nu = resultado % 2;

      alert("O resultado é: " + resultado + ".");
      
      if (nu == 0){
         alert("este número é par");
      }
      else {
         alert("este número é impar");
      }
} 
