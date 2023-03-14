
function foto(imagen){
    document.getElementById('imagen').src="img/"+imagen+".jpg";
}

function posicion(pos){
    var arriba=document.getElementById("arriba").value;
    var abajo=document.getElementById("abajo").value;

    if(pos=='arriba'){
        document.getElementById("texto1").innerHTML=arriba;
    } else if(pos == 'abajo') 
        document.getElementById("texto2").innerHTML=abajo;
}


/* Cambio de letra */
function cambiofuente(){
    var a=document.getElementById('opcionletra').value;
    var clase=document.getElementById('texto1').className;
    var clase2=document.getElementById('texto2').className;
    document.getElementById('texto1').classList.replace(clase, a);
    document.getElementById('texto2').classList.replace(clase2, a);
}

function CambioColor(){
    var color = document.getElementById('colorletra').value;

    document.getElementById('texto1').style.color=color;
    document.getElementById('texto2').style.color=color;
}

function CambiarTamano(){
    var tamano = document.getElementById('tamano').value;

    document.getElementById('texto1').style.fontSize=tamano+'px';
    document.getElementById('texto2').style.fontSize=tamano+'px';
}

/* Cambio de color de fondo */

function FondoColor(){
    var color= document.getElementById('color').value;
    document.body.style.backgroundColor=color;
}