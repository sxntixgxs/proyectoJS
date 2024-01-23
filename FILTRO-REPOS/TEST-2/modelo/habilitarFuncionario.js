//informacion del cl consultando con su cc
//info del cliente mostrada ..
export function habilitarFuncionario(){
    const consultaFuncionario = document.getElementById("consultarCC");
    const inputCC = document.createElement("input");
    const labelCC = document.getElementById("userCC")
    inputCC.type = "text";
    inputCC.classList.add("inputCC");
    labelCC.textContent = "Ingrese la cedula a consultar: "
    consultaFuncionario.appendChild(inputCC)
}