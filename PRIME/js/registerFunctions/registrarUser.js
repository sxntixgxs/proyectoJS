

export async function registrarUser(user,clave){
    const respuesta = await fetch(`https://probable-fishstick-r4g5w5wj9q7wcqv4-3000.app.github.dev/users`, {
        method: 'POST',
        body: JSON.stringify({
            "nickname":user,
            "pass":clave,
            "yavoto":0,
            "musicInfo":{}
        }),
        headers: {
            'Content-type': 'application/json; charset=UTF-8',
        }
    })
    return respuesta
}
