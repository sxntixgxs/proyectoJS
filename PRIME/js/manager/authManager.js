import habilitarLogin from "../login-contact-us/habilitarLogin.js"
import { checkUsuario } from "../checkUsuario.js";
import { loginApproved } from "../loginApproved.js";
import { loginRechazo } from "../loginRechazo.js";
document.addEventListener('DOMContentLoaded', () => {
    console.log('La página se ha cargado completamente');
    let id = localStorage.getItem("currentID");
    if(id===null){
        habilitarLogin();
    }

});
let boton = document.getElementById("sendLogin");
boton.addEventListener("click",function(){
    console.log("Soy el boton send login")
    let user = document.getElementById("nickname").value;
    let clave = document.getElementById("pass").value;
    checkUsuario(user,clave)
        .then(user_check=>{
            if (user_check===true){
                console.log("Estas registrado papa")
                loginApproved()
                
            }else{
                loginRechazo()
            }
        })
})
let logout = document.getElementById("logout");
logout.addEventListener("click",()=>{
    localStorage.clear();
    location.reload();
})