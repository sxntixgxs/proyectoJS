//aqui estoy asumiendo que la db va a estar montada con un json server, entonces voy a acceder a ella de esa forma para validar los datos de inicio de sesion

export async function checkUsuario(user,clave){
    const respuesta = await fetch(`http://localhost:3000/users?nickname=${user}&pass=${clave}`, {
        method: 'GET',
        headers: {
            'Content-type': 'application/json; charset=UTF-8',
        },
    })
    const usuario_ingresado = await respuesta.json()
    let user_check = usuario_ingresado.length !== 0;
    return user_check 
}