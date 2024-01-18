import habilitarLogin from "../loginFunctions/habilitarLogin.js"
import { checkUsuario } from "../loginFunctions/checkUsuario.js";
import { loginApproved } from "../loginFunctions/loginApproved.js";
import { loginRechazo } from "../loginFunctions/loginRechazo.js";
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
let botonRegistro = document.getElementById("dont_account");
botonRegistro.addEventListener("click",()=>{  
        const register_section = document.getElementById("register_section");
        register_section.style.visibility = "visible";
        register_section.style.display = "";
    
})
let logout = document.getElementById("logout");
logout.addEventListener("click",(e)=>{
    e.stopPropagation()
    localStorage.clear();
    location.reload();
})