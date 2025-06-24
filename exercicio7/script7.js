let mostraResultado = document.querySelector("#resultado")
let inscritos = 0;

function cliques() {
    inscritos += 1;
  times = parseInt(inscritos);

    mostraResultado.innerHTML = `<p>Número de cliques: ${inscritos}`;
  
if(inscritos >=10){


}
 
  

}


function zerar() {

inscritos = 0;
mostraResultado.innerHTML = `<p>Numero de cliques: 0</p>`;
    
}