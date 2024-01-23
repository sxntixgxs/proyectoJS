//recibo la lista de compras

function cuantoFalta(compras){
    let numero = (compras.length)
    texto = `Te faltan ${numero} compras para reclamar tu bono!`;
}

export function activarBono(compras){
    const botonBono = document.querySelector(".botonBono")
    compras.length>=10 ? botonBono.setAttribute("enabled",""):cuantoFalta(compras);
}