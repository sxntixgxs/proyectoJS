let loginSection = document.querySelector(".login");
export function cambiarVisual(){
    loginSection.style.display="none";
    loginSection.style.visibility="hidden";
    let crearBienvenida = document.createElement("h2");
    crearBienvenida.textContent=`BIENVENIDO FUNCIONARIO ${localStorage.getItem("id")}`
    let bienvenida = document.querySelector(".bienvenidaFuncionario");
    bienvenida.appendChild(crearBienvenida)
}