//recibo la lista de compras

function cuantoFalta(compras){
    let numero = 10-(compras.length);
    let texto = `Te faltan ${numero} compras para reclamar tu bono!`;
    let mensaje = document.createElement("p")
    mensaje.textContent=texto
    let container = document.getElementById("consultarCC");
    container.appendChild(mensaje)

    

}

export function activarBono(compras){
    const botonBono = document.querySelector(".botonBono")
    compras.length>=10 ? botonBono.setAttribute("enabled",""):cuantoFalta(compras);
}