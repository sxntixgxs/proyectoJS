//aqui estoy asumiendo que la db va a estar montada con un json server, entonces voy a acceder a ella de esa forma para validar los datos de inicio de sesion

export async function albumVotos(){
    const respuesta = await fetch(`https://probable-fishstick-r4g5w5wj9q7wcqv4-3000.app.github.dev/albums`,{
        method: 'GET',
        headers: {
            'Content-type': 'application/json; charset=UTF-8',
        },
    })       
    const albums = await respuesta.json();
    let arrayNombresAlbums = albums.map(album=>album.titulo)
    let arrayVotosAlbums = albums.map(album=>album.votos)
    console.log("estos son los nombres",arrayNombresAlbums)
    console.log("estos son los votos",arrayVotosAlbums)
    let bigArray = [arrayNombresAlbums,arrayVotosAlbums]
    return bigArray
}

