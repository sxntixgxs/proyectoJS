import { checkVoto } from "./checkVoto.js";
import { recargaChart,withVoto, sumVoto } from "./votoFunctions.js"; 

document.addEventListener('botonesCreados', async function() {
    let btn1 = document.getElementById("btn_stats1")
    let btn2 = document.getElementById("btn_stats2")
    let btn3 = document.getElementById("btn_stats3")
    let btn4 = document.getElementById("btn_stats4")
    let btn5 = document.getElementById("btn_stats5")
    let btn6 = document.getElementById("btn_stats6")
    let btn7 = document.getElementById("btn_stats7")

    let voteButtons = [btn1, btn2, btn3, btn4, btn5, btn6, btn7]; 

    let id = localStorage.getItem('currentID');
    console.log("Esta es la sesión iniciada:", id);
    //antes de todo debo revisar si el usuario ya voto
    let tieneVoto = await checkVoto(id);
    console.log("tiene voto ",tieneVoto)
    if(tieneVoto){
        withVoto()
    }else{
        function manejarVoto(event){
            let botonPresionado = event.target //con esto obtengo el boton presionado de la botonera
            let idBoton = botonPresionado.id //saco la propiedad id
            let idAlbum = idBoton.replace('btn_stats','')
            console.log(`el ${id} ha votado por ${idAlbum}`);
            sumVoto(id,idAlbum);
            withVoto();
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
