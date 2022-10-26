
/*const fondo = document.querySelector(".subtitulo__2");

fondo.style.backgroundColor = "blue";*/

/*let videos=["Boyero1.mp4", "Boyero2.mp4","Boyero3.mp4"]

let videoActual = 0

document.getElementById("atras").addEventListener("click", cambiarVideo);
document.getElementById("adelante").addEventListener("click", cambiarVideo);

function cambiarVideo(){
    let boton = this.id;
    if(boton == "atras"){
        videoActual --;
        if(videoActual < 0){
            videoActual = videos.length -1;
        } 
        else{
            videoActual ++;
            if(videoActual == video.length){
                videoActual =0 ;
            }
        }
    }
    var videoAMostrar = videos[videoActual];
    document.getElementById("video").src='Boyero' + videoAMostrar + '.mp4';
}

/*let marquesina = document.getElementById("marq");
marquesina.addEventListener("click", modificar);

const marquesinaii = document.querySelector(".marquesina");

function modificar(){
    marquesinaii.style.animationPlayState = "paused";
}*/

const video = document.getElementById("loco");
const frase = document.querySelector(".epigrafe_video");
let frases = ["juego", "aventura", "arroyos"];
let numFrases = 0;
frase.textContent = frases[numFrases];
let numero = 1;

function adelantar (){
    numero++;
    if (numero>3){
        numero = 1;
        video.src="Boyero"+ numero+".mp4";
        numFrases = 0;
        frase.textContent = frases[numFrases];
    }
    else{
        numFrases++;
        video.src="Boyero"+numero+".mp4";
        frase.textContent = frases[numFrases];
    }
    
}

function atras (){
    numero--;
    if (numero<1){
        numero = 3;
        video.src="Boyero"+ numero+".mp4";
        numFrases = 2;
        frase.textContent = frases[numFrases];
    }
    else{
        numFrases--;
        video.src="Boyero"+numero+".mp4";
        frase.textContent = frases[numFrases];
    }
    
}


