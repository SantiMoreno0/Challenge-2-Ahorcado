function dibujarInicio() {

        let canvas = document.querySelector("canvas");
        if (canvas.getContext) {
            let pincel = canvas.getContext("2d");
            //piso
            pincel.strokeStyle = "red"
            pincel.beginPath();
            pincel.moveTo(200, 140);
            pincel.lineTo(30, 140);
            pincel.stroke();

            //pared, techo y soga
            pincel.beginPath();
            pincel.moveTo(50, 140);
            pincel.lineTo(50, 10);
            pincel.lineTo(150, 10);
            pincel.lineTo(150, 30)
            pincel.stroke();

    }
}


function dibujarCabeza() {
    let canvas = document.querySelector("canvas");
    if (canvas.getContext) {
        let pincel = canvas.getContext("2d");
        //cabeza
        pincel.strokeStyle = "red"
        pincel.beginPath();
        pincel.arc(150, 45, 15, 0, Math.PI * 2, true);
        pincel.stroke()
    }
}

        
function dibujarCuerpo() {
    let canvas = document.querySelector("canvas");
    if (canvas.getContext) {
        let pincel = canvas.getContext("2d"); 
            //cuerpo
            pincel.beginPath();
            pincel.moveTo(150, 60);
            pincel.lineTo(150, 100);
            pincel.stroke();
        }
}
    
function dibujarBrazoD() {
    let canvas = document.querySelector("canvas");
    if (canvas.getContext) {
        let pincel = canvas.getContext("2d");
        //brazo derecho
        pincel.beginPath();
        pincel.moveTo(150, 70);
        pincel.lineTo(170, 80);
        pincel.stroke();
    }
}

function dibujarBrazoI() {
    let canvas = document.querySelector("canvas");
    if (canvas.getContext) {
        let pincel = canvas.getContext("2d");
         
        //brazo izquierdo
        pincel.beginPath();
        pincel.moveTo(150, 70);
        pincel.lineTo(130, 80);
        pincel.stroke();
            
    }
}

function dibujarPiernaD() {
    let canvas = document.querySelector("canvas");
    if (canvas.getContext) {
        let pincel = canvas.getContext("2d");
        //pierna derecha
        pincel.beginPath();
        pincel.moveTo(150, 100);
        pincel.lineTo(165, 120);
        pincel.stroke();
    }
}


function dibujarPiernaI() {
    let canvas = document.querySelector("canvas");
    if (canvas.getContext) {
        let pincel = canvas.getContext("2d");
            //pierna izquierda
            pincel.beginPath();
            pincel.moveTo(150, 100);
            pincel.lineTo(135, 120);
            pincel.stroke();
        }
    }

         
    
function dibujarGanado() {
    limpiarPantalla();
        dibujarCabeza();
        dibujarCuerpo();
        dibujarBrazoD();
        dibujarBrazoI();
        dibujarPiernaD();
        dibujarPiernaI();
}
    
function dibujarPerdido() {
    dibujarGanado();
    dibujarInicio();
}

function limpiarPantalla() {

    let canvas = document.querySelector("canvas");
    if (canvas.getContext) {
        let pincel = canvas.getContext("2d");
        //borrarCanvas
        pincel.clearRect(0,0,500,250);
        pincel.fillStyle = "#252739";
        pincel.fillRect(0, 0, 500, 250);
    }
}