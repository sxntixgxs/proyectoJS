export async function checkUsuario(user,clave){
    const respuesta = await fetch(`http://localhost:4001/usuarios?id=${user}&pass=${clave}`, {
        method: 'GET',
        headers: {
            'Content-type': 'application/json; charset=UTF-8',
        },
    })
    const usuario_ingresado = await respuesta.json()
    let user_check = 0;
    console.log("info usuario ingresado",usuario_ingresado)
    if(usuario_ingresado[0].tipoId==="2"){
        localStorage.setItem("id",`${user}`)
        console.log("El usuario es un funcionario !!! mostrar pag funcionario")
        user_check=2
    }else if(usuario_ingresado[0].tipoId==="3"){
        localStorage.setItem("id",`${user}`)
        console.log("El usuario ingresado es un cliente !!!")
        user_check=3;
    }else{
        console.log("El usuario no esta registrado")
        alert("El usuario no está registrado!")
    }

    return user_check 
}