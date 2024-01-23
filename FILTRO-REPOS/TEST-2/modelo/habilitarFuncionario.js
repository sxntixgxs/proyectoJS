//informacion del cl consultando con su cc
//info del cliente mostrada ..
export function habilitarFuncionario(){
    const consultaFuncionario = document.getElementById("consultarCC");
    const inputCC = document.createElement("input");
    const labelCC = document.getElementById("userCC")
    const enviarCC = document.createElement("button")
    const botonera = document.createElement("div")
    const botonRegistroCompra = document.createElement("button");
    const botonBono = document.createElement("button");
    botonRegistroCompra.classList.add("botonRegistroCompra");
    botonBono.classList.add("botonBono");
    botonera.classList.add("botonera");
    botonRegistroCompra.textContent="Registro de compra";
    botonBono.textContent = "BONO";
    botonBono.setAttribute("disabled","")
    inputCC.type = "text";
    inputCC.classList.add("inputCC");
    labelCC.textContent = "Ingrese la cedula a consultar: "
    enviarCC.classList.add("enviarCC");
    enviarCC.textContent="Consultar"
    // botonBono.setAttribute("disabled")
    consultaFuncionario.appendChild(inputCC)
    consultaFuncionario.appendChild(enviarCC)
    //botonera el div contenedor es id consultarCC

    botonera.appendChild(botonRegistroCompra);
    botonera.appendChild(botonBono);
    consultaFuncionario.appendChild(botonera)
    let eventoBotonesCreados = new Event('botonesCreados');
    document.dispatchEvent(eventoBotonesCreados);
}
