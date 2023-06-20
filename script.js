
function seleccionar(link){
    var opciones = document.querySelectorAll('#links a')
    opciones[0].className = "";
    opciones[1].className = "";
    opciones[2].className = "";
    opciones[3].className = "";
    opciones[4].className = "";
    link.className = "seleccionado"

    var x = document.getElementById("nav")
    x.className = "";
}

function responsiveMenu(){
    var x = document.getElementById("nav");
    if(x.className===""){
        x.className = "responsive";
    }else{
        x.className = "";
    }
}

window.scroll = function(){
    efectoHabilidades()
}

function efectoHabilidades(){
    var skills = document.getElementById("skills");
    var distancia_skills = window.innerHeight - skills.getBoundingClientRect().top;
    if(distancia_skills >= 300){
        document.getElementById("html").classList.add("bar-progreso1")
        document.getElementById("react").classList.add("bar-progreso2")
        document.getElementById("html").classList.add("bar-progreso3")
        document.getElementById("html").classList.add("bar-progreso4")
        document.getElementById("html").classList.add("bar-progreso5")
    }
}

let ubicacionPrincipal = window.scrollY;
window.scroll = function(){
    let desplazamiento_Actual = window.screenY;
    if(ubicacionPrincipal >= desplazamiento_Actual){
        document.getElementById("nav").style.top = '0';
    }else{
        document.getElementById("nav").style.top = '-100';
    }
    ubicacionPrincipal = desplazamiento_Actual;
}