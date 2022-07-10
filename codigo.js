let palabras = ["BARCELONA","REALMADRID","JUVENTUS","NAPOLI","LIVERPOOL", "BAYERN","PSG","TOTTENHAM","ARSENAL","CHELSEA","SEVILLA","INTER","MILAN","BENFICA","PORTO", "TALLERES", "INSTITUTO", "BOCA", "RIVER", "INDEPENDIENTE", "RACING", "VELEZ", "NEWELLS"];
let palabraOc = "";
let palabraAdiv = "";
let vidas = 7;
let intentos = document.getElementById("intentos");
let letrasTocadas = [];
let filtro;
var letrasPosibles = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","U","V","W","X","Y","Z"];
let botonInicio = document.querySelector("#hola");
let palabra = document.getElementById("palabra").value;
let campoLetra
let input = document.querySelector("#letra");
let letrasPalabra = 0;
let letraFallada
let canvas = document.querySelector(".canvas");
let inicio = false;
let botonRendirse = document.querySelector(".btn-rendirse");
let botonNuevaPalabra = document.querySelector(".btn-nueva-palabra");
let containerPalabra = document.querySelector(".container-palabra");
let containerFalladas = document.querySelector(".container-falladas");
botonRendirse.addEventListener("click", mostrarPalabra);
botonInicio.addEventListener("click", iniciarJuego);
botonNuevaPalabra.addEventListener("click",nuevaPalabra)


function iniciarJuego() {
        sortearPalabra();
        document.getElementById("palabra").innerHTML = palabraAdiv;
        botonInicio.classList.add("ocultar")
        canvas.classList.remove("ocultar");
        botonRendirse.classList.remove("ocultar");
        botonNuevaPalabra.classList.remove("ocultar");
}

function inhabilitar() {
    filtro = "";
}

function sortearPalabra() {
    palabraOc = palabras[Math.floor(Math.random() * palabras.length)];
    console.log(palabraOc);
    inicio = true;
    filtro = "ABCDEFGHIJKLMNÑOPQRSTUVWXYZ";
    campoPalabra = document.createElement("div");
    campoPalabra.classList.add("campo-palabra");
    containerPalabra.appendChild(campoPalabra);
    campoFalladas = document.createElement("div");
    campoFalladas.classList.add("campo-falladas");
    containerFalladas.appendChild(campoFalladas);
    for (let i = 0; i < palabraOc.length; i++){
        campoLetra = document.createElement("span");
        campoLetra.classList.add("campo-letra");
        campoPalabra.appendChild(campoLetra);
    }
}

function mostrarPalabra() {
    for (i = 0; i < palabraOc.length; i++){
        campoPalabra.childNodes[i].innerHTML = palabraOc[i];
    }
    intentos.innerHTML = "Perdiste";
    dibujarPerdido();
    inhabilitar();
}


function nuevaPalabra() {
    limpiarPantalla();
    vidas = 7;
    let filtro = "ABCDEFGHIJKLMNÑOPQRSTUVWXYZ";
    intentos.innerHTML = "";
    letrasPalabra = 0;
    letrasTocadas = [];
    eliminarChild(containerPalabra);
    eliminarChild(containerFalladas);
    sortearPalabra();

}   

function eliminarChild(parent) {
    while (parent.firstChild) {
        parent.removeChild(parent.firstChild);
    }
}
    
    
function crearLetraFallada(key) {
        letraFallada = document.createElement("span");
        letraFallada.classList.add("letra-fallada")
        letraFallada.innerHTML = key;
        campoFalladas.appendChild(letraFallada);
        document.getElementById("intentos").innerHTML = "El numero de intentos es: " + (vidas - 1); 
}

function letraErronea(key) {
        if (letrasTocadas.includes(key) == false ) {
            if(vidas>0){
                crearLetraFallada(key);
                vidas--;
                if (vidas == 6) {
                    dibujarInicio();
                }
                if (vidas == 5) {
                    dibujarCabeza();
                }
                else if (vidas == 4) {
                    dibujarCuerpo();
                }
                else if (vidas == 3) {
                    dibujarBrazoD();
                }
                else if (vidas == 2) {
                    dibujarBrazoI();
                }
                else if (vidas == 1) {
                    dibujarPiernaD();
                }
            }      

            if (vidas <= 0) {
                intentos.innerHTML = "Te quedaste sin intentos. Perdiste";
                dibujarPiernaI();
                mostrarPalabra()
            }
        }
}

function letraCorrecta(key) {
        for (i = 0; i < palabraOc.length; i++) {
        if (key == palabraOc[i] ) {
            letrasPalabra++;
            campoPalabra.childNodes[i].innerHTML = key;
             }
        }   
}
    
function verificarTecla(key) {
    if (letrasTocadas.includes(key)== false) {
        letrasTocadas.push(key)
    }
    if (letrasTocadas.length <= 0) {
        letraCorrecta(key);
    }
    if (letrasTocadas.includes(key)) {
    }
}




var teclaPresionada = document.querySelector("html");
teclaPresionada.addEventListener("keydown", function (event) {
    var key = event.key.toUpperCase();
    let campoPalabra = document.querySelector(".campo-palabra");
    let cantidadLetras = campoPalabra.childNodes.length;    
    if (filtro.includes(key)&&inicio==true) {
        if (palabraOc.includes(key)&&letrasTocadas.includes(key)==false) {
            letraCorrecta(key);
        }
        else {
            letraErronea(key);
        } 
        verificarTecla(key);
        if (letrasPalabra == cantidadLetras) {
            intentos.innerHTML = "GANASTE!";
            dibujarGanado();
            filtro = "";
        }
    }

    console.log(letrasPalabra)
    console.log(vidas)
});





document.getElementById("palabra").innerHTML = palabraAdiv;


