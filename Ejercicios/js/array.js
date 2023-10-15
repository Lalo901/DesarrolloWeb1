let=mi_array=[1,2,3,4,5,6];
let elemento=mi_array.splice(2,1);

console.log(elemento);

let nuevoParrafo=document.createElement("P");

let textoParrafo=document.createTextNode("Lorem");
nuevoParrafo.appendChild(textoParrafo);
nuevoParrafo.style.background="powderblue";
nuevoParrafo.style.fontSize="36px";
nuevoParrafo.id="resultado";
document.body.appendChild(nuevoParrafo);

function calcular(){
    /*
    let numero1=formulario.num1.value;
    let numero2=formulario.num2.value;*/
    let objetoInput=document.getElementById("num1");
    let numero1=objetoInput.value;
    objetoInput.style.background="gold";
    
    let numero1=document.getElementById("num1").value;
    let numero2=document.getElementById("num2").value;
    
    let resultado= parseInt(numero1)+parseInt(numero2);
    alert(resultado);
    


}



