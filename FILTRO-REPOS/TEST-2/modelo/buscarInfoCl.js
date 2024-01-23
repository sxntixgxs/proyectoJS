export async function buscarInfoCl(cc){
    const respuesta_nombre = await fetch(`http://localhost:4001/usuarios?id=${cc}`, {
        method: 'GET',
        headers: {
            'Content-type': 'application/json; charset=UTF-8',
        },
    })
    const respuesta_registros = await fetch(`http://localhost:4001/registros?usuarioId=${cc}`, {
        method: 'GET',
        headers: {
            'Content-type': 'application/json; charset=UTF-8',
        },
    })
    const nombre_usuario = await respuesta_nombre.json()
    const compras_usuario = await respuesta_registros.json();
    let datos = {};
    datos["nombre"]=nombre_usuario[0].nombre;
    datos["compras"]=compras_usuario[0].compras;
    return datos
}