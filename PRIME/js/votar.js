import { checkVoto } from "./checkVoto.js";
// import { albumVotos } from "./valoresGraph.js";
import { withVoto, sumVoto } from "./votoFunctions.js"; 
import { albumVotos } from "./valoresGraph.js";
import { actualizarGrafico } from "./actualizarGraph.js"
document.addEventListener('botonesCreados', async function() {
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
    //antes de todo debo revisar si el usuario ya voto
    let tieneVoto = await checkVoto(id);
    console.log("tiene voto ",tieneVoto)
    if(tieneVoto){
        withVoto()
    }else{
        async function manejarVoto(event){
            let botonPresionado = event.target //con esto obtengo el boton presionado de la botonera
            let idBoton = botonPresionado.id //saco la propiedad id
            let idAlbum = idBoton.replace('btn_vote','')
            console.log(`el ${id} ha votado por ${idAlbum}`);
            sumVoto(id,idAlbum);
            withVoto();
            let datosActualizados = await albumVotos();
            console.log("estos son los datos actualizados",datosActualizados)
            // actualizarGrafico(datosActualizados)
        }
        voteButtons.forEach(boton => {
            boton.addEventListener("click",manejarVoto)
         });
    }
})


//     function manejarVoto() {
        
//         let id = localStorage.getItem('currentID');
//         let siVoto = checkVoto(id);
//         console.log("El usuario ha votado:", siVoto);

//         if (siVoto) {
//             withVoto();
//         } else {
//             sumVoto(id); // Suponiendo que sumVoto incrementa el voto
//         }
//     }

//      voteButtons.forEach(boton => {
//         boton.addEventListener("click",manejarVoto)
//      });
//     });
// ;
