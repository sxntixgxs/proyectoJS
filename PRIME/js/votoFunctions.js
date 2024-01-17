


export function withVoto(){
    const btn1 = document.getElementById("btn_vote1")
    const btn2 = document.getElementById("btn_vote2")
    const btn3 = document.getElementById("btn_vote3")
    const btn4 = document.getElementById("btn_vote4")
    const btn5 = document.getElementById("btn_vote5")
    const btn6 = document.getElementById("btn_vote6")
    const btn7 = document.getElementById("btn_vote7")
    const botonera = [btn1,btn2,btn3,btn4,btn5,btn6,btn7]; 
    botonera.forEach(boton => {
        boton.classList.add("withVoto");
        boton.textContent = "You already voted"
    });
}

export async function sumVoto(id){
    fetch(`https://probable-fishstick-r4g5w5wj9q7wcqv4-3000.app.github.dev/users?id=${id}`, {
        method: 'PATCH',
        body: JSON.stringify({
            "yavoto":1
        }),
        headers:{
            'Content-type': 'application/json; charset=UTF-8',
        }
    })
    const rta = await fetch(`https://probable-fishstick-r4g5w5wj9q7wcqv4-3000.app.github.dev/albums?id=${id}`,{
        method:'GET',
        headers: {
            'Content-type': 'application/json; charset=UTF-8',
        },
    })
    console.log("acabo de pedir los datos de votacion del album")
    const album = await rta.json()
    let votosAlbum = album.votos+1;
    fetch(`https://probable-fishstick-r4g5w5wj9q7wcqv4-3000.app.github.dev/albums?id=${id}`,{
        method: 'PATCH',
        body: JSON.stringify({
            "votos":votosAlbum
        }),
        headers:{
            'Content-type': 'application/json; charset=UTF-8',
        }
    })
    console.log("acabo de actualizar los votos del album")
}