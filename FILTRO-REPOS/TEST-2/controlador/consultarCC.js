//    enviarCC.classList.add("enviarCC");
import { buscarInfoCl } from "../modelo/buscarInfoCl.js";
import { imprimirHistorialCompra } from "../modelo/imprimirHistorialCompra.js"
import { activarBono } from "../modelo/activarBono.js"
document.addEventListener('botonesCreados', async function(){
    let enviarCC = document.querySelector(".enviarCC");
    enviarCC.addEventListener("click",function(){
        console.log("acaba de enviar la cc a consultar")
        let cc = document.querySelector(".inputCC").value;
        buscarInfoCl(cc)
            .then((datos=>{
                console.table(datos)//
                imprimirHistorialCompra(datos)
                activarBono(datos.compras)
            }))
        
    })
})