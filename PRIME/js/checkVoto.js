export async function checkVoto(id){
    const respuesta = await fetch(`https://probable-fishstick-r4g5w5wj9q7wcqv4-3000.app.github.dev/users?id=${id}`, {
        method: 'GET',
        headers: {
            'Content-type': 'application/json; charset=UTF-8',
        },
    })
    const usuario = await respuesta.json();
    let valorVoto = usuario.yavoto;
    let siVoto = false;
    valorVoto !== 0 ? siVoto = true : siVoto
    console.log(`el id ${id} ha votado`,siVoto)
    return siVoto
}