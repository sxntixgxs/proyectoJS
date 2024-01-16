

export async function registrarUser(user,clave){
    const respuesta = await fetch(`https://probable-fishstick-r4g5w5wj9q7wcqv4-3000.app.github.dev/users`, {
        method: 'POST',
        body: JSON.stringify({
            "id":`${Math.floor(Math.random()*(2000-20+1)+20)}`,
            "nickname":user,
            "pass":clave
        }),
        headers: {
            'Content-type': 'application/json; charset=UTF-8',
        }
    })
    .then(response => response.json())
    .then(json => console.log(json))
    .catch(error => console.error("Error!!!: " + error));
}
