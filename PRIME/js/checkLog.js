import { checkUsuario } from "./checkUsuario.js";
import habilitarVotacion from "./habilitarVotacion.js"
import { loginRechazo } from "./loginRechazo.js";
import { loginApproved } from "./loginApproved.js";

let user = localStorage.getItem("currentID");
let boton = document.getElementById("ap")
if(user!==null){
    boton.textContent = "Logged in"
}else{
    boton.setAttribute("onclick","login()")
}
function login(){
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
}