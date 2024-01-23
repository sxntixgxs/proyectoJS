export async function habilitarCl(){
    const info1 = document.querySelector(".info1");
    const info2 = document.querySelector(".info2");
    const info3 = document.querySelector(".info3");
    let ccUser =    localStorage.getItem("id")
    console.log("cc actual",ccUser)
    const respuesta_nombre = await fetch(`http://localhost:4001/usuarios?id=${ccUser}`, {
        method: 'GET',
        headers: {
            'Content-type': 'application/json; charset=UTF-8',
        },
    })
    const respuesta_registros = await fetch(`http://localhost:4001/registros?id=${ccUser}`, {
        method: 'GET',
        headers: {
            'Content-type': 'application/json; charset=UTF-8',
        },
    })
    const json_usuario = await respuesta_nombre.json();
    const json_registros = await respuesta_registros.json();
    const nombreUsuario = document.createElement("h2");
    let numeroCompras = json_registros.compras.lenght;
    const registroCompras = document.createElement("p");//info1
    const faltaBono = document.createElement("p");
    const numeroBonos = document.createElement("p");
    const fechasBonos = document.createElement("p")
    //primero nombre de usuario y registro de compras
    nombreUsuario.classList.add("nombreUsuario");
    nombreUsuario.textContent=json_usuario.nombre;
    registroCompras.classList.add("registroCompras");
    registroCompras.textContent =`Este es el numero de compras que ha realizado ${numeroCompras}` 
    //
    info1.appendChild(nombreUsuario);
    info1.appendChild(registroCompras)
}