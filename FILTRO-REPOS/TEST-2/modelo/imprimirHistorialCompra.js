//en consultarCC
// let datos = {};
// datos["nombre"]=nombre_usuario[0].nombre;
// datos["compras"]=compras_usuario[0].compras;
export function imprimirHistorialCompra(datos){
    let container = document.getElementById("consultarCC");
    let nombre_usuario = document.createElement("h2");
    nombre_usuario.textContent=datos.nombre;
    datos.compras.forEach(compra => {
        const contenedorCompra = document.createElement("div");
        const fecha = document.createElement("p");
        const perfumeId = document.createElement("p");
        fecha.classList.add("fechaCompra");
        perfumeId.classList.add("perfumeIdCompra");
        contenedorCompra.classList.add("contenedorCompra");
        const texto = document.createElement("p");
        texto.textContent=" se compró el perfume: ";
        fecha.textContent=compra.fecha;
        perfumeId.textContent=compra.perfumeId;

        contenedorCompra.appendChild(fecha);

        contenedorCompra.appendChild(texto);

        contenedorCompra.appendChild(perfumeId);
        contenedorCompra.style.display="flex";
        container.appendChild(contenedorCompra)
    });
}