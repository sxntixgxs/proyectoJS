import { checkVoto } from "./checkVoto.js";
import { withVoto, sumVoto } from "./votoFunctions.js"; 

document.addEventListener('botonesCreados', function() {
    let btn1 = document.getElementById("btn_vote1")
    let btn2 = document.getElementById("btn_vote2")
    let btn3 = document.getElementById("btn_vote3")
    let btn4 = document.getElementById("btn_vote4")
    let btn5 = document.getElementById("btn_vote5")
    let btn6 = document.getElementById("btn_vote6")
    let btn7 = document.getElementById("btn_vote7")

    let voteButtons = [btn1, btn2, btn3, btn4, btn5, btn6, btn7]; 

    let id = localStorage.getItem('currentID');
    console.log("Esta es la sesión iniciada:", id);

    function manejarVoto() {
        
        console.log("Esta funcion manejar voto funciona")
        let id = localStorage.getItem('currentID');
        let siVoto = checkVoto(id);
        console.log("El usuario ha votado:", siVoto);

        if (siVoto) {
            withVoto();
        } else {
            sumVoto(id); // Suponiendo que sumVoto incrementa el voto
        }
    }

     voteButtons.forEach(boton => {
        boton.addEventListener("click",manejarVoto)
     });
    });
;
