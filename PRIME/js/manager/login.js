//recoger valores ingresados en nickname y password cuando se de click a send

import { checkUsuario } from "../loginFunctions/checkUsuario.js";
import habilitarVotacion from "../loginFunctions/habilitarVotacion.js"
import { loginRechazo } from "../loginFunctions/loginRechazo.js";
import { loginApproved } from "../loginFunctions/loginApproved.js";

let id = localStorage.getItem('currentID');
console.log(id)
if(id === null){
    console.log("se ejecuta el if")
    let login = document.getElementById("login_section");
    login.style.visibility = "visible";
    login.style.display = "";
}else{
    habilitarVotacion()
    loginApproved()
    console.log("se ejecuta el else")
}

let boton = document.getElementById("sendLogin");
boton.addEventListener("click",function(){
    console.log("Soy el boton send login")
    let user = document.getElementById("nickname").value;
    let clave = document.getElementById("pass").value;
    checkUsuario(user,clave)
        .then(user_check=>{
            if (user_check===true){
                console.log("Estas registrado papa")
                habilitarVotacion()
                loginApproved()
                
            }else{
                loginRechazo()
            }
        })
})

let logout = document.getElementById("logout");
logout.addEventListener("click",()=>{
    localStorage.clear();
    modal.classList.remove("modal--show")
    location.reload();
})
//     localStorage.setItem("currentID",null);
//     logout.style.display = "none";
//     logout.style.visibility = "hidden";
//     // let login = document.getElementById("login_section");
//     // login.style.visibility = "visible";
//     // login.style.display = "";
//     //tengo que configurar el boton logout
