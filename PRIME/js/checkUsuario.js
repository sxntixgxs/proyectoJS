//aqui estoy asumiendo que la db va a estar montada con un json server, entonces voy a acceder a ella de esa forma para validar los datos de inicio de sesion

export async function checkUsuario(user,clave){
    const respuesta = await fetch(`https://probable-fishstick-r4g5w5wj9q7wcqv4-3000.app.github.dev/users?nickname=${user}&pass=${clave}`, {
        method: 'GET',
        headers: {
            'Content-type': 'application/json; charset=UTF-8',
        },
    })
    const usuario_ingresado = await respuesta.json()
    let user_check = usuario_ingresado.length !== 0;
    console.log(usuario_ingresado)
    if(usuario_ingresado.length!==0){
        localStorage.setItem('currentID',usuario_ingresado[0].id)
    }
    console.log("acabo de enviar el localStorage?")
    console.log("este es el ID del usuario actual",localStorage.getItem('currentID'))
    return user_check 
}