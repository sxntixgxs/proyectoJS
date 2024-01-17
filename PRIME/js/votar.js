// //deberia funcionar, primero, verificando si la persona no ha votado, en el db users, esta el yavoto, si es diferente de 0 es que ya voto, por lo que deberia aparecer un mensaje indicando que solo se puede votar una vez por usuario, debajo de ese mensaje debe estar una opcion para cambiar eliminar el voto anterior, es decir que el yavoto vuelva a 0 y pues al darle vote a cada album se suma en albums.votos+1, con eso se deberia hacer un graph

// import { checkVoto } from "./checkVoto.js";

// const vote1 = document.getElementById("btn_vote1")
// const vote2 = document.getElementById("btn_vote2")
// const vote3 = document.getElementById("btn_vote3")
// const vote4 = document.getElementById("btn_vote4")
// const vote5 = document.getElementById("btn_vote5")
// const vote6 = document.getElementById("btn_vote6")
// const vote7 = document.getElementById("btn_vote7")

// let id = localStorage.getItem('currentID');
// let siVoto = false;
// siVoto = checkVoto(id);
// vote1.addEventListener("clic",checkVoto)
// vote2.addEventListener("clic",checkVoto)
// vote3.addEventListener("clic",checkVoto)
// vote4.addEventListener("clic",checkVoto)
// vote5.addEventListener("clic",checkVoto)
// vote6.addEventListener("clic",checkVoto)
// vote7.addEventListener("clic",checkVoto)
// console.log("esta es la sesion iniciada",id)
// console.log("el ha votado",siVoto)
// if(siVoto){
//     withVoto(boton)
// }else{
//     sumVoto(id)
// }
import { checkVoto } from "./checkVoto.js";
import { withVoto, sumVoto } from "./votoFunctions.js"; // Asegúrate de importar estas funciones si son necesarias

const voteButtons = [document.getElementById("btn_vote1"), document.getElementById("btn_vote2"), ...]; // Continúa para todos los botones

let id = localStorage.getItem('currentID');
console.log("Esta es la sesión iniciada:", id);

function handleVote(event) {
    let siVoto = checkVoto(id);
    console.log("El usuario ha votado:", siVoto);

    if (siVoto) {
        withVoto(event.target); // Suponiendo que withVoto maneja el caso de un voto existente
    } else {
        sumVoto(id); // Suponiendo que sumVoto incrementa el voto
    }
}

voteButtons.forEach(button => button.addEventListener("click", handleVote));
