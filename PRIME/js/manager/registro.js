import { checkUsuario } from "../loginFunctions/checkUsuario.js";
import { habilitaRegistro } from "../registerFunctions/habilitarRegistro.js";
import { registrarUser } from "../registerFunctions/registrarUser.js";
import { registerApproved } from "../registerFunctions/registerApproved.js";
import { registerRechazo } from "../registerFunctions/registerRechazo.js";

const dont_account = document.getElementById("dont_account");
const boton = document.getElementById("register_send");
dont_account.addEventListener("click",habilitaRegistro);
boton.addEventListener("click",function(){
    console.log("soy el boton send register");
    let user = document.getElementById("register_nickname").value;
    let clave = document.getElementById("register_password").value;
    registrarUser(user,clave)
    checkUsuario(user,clave)
        .then(user_check=>{
            if(user_check===true){
                console.log("Registro completado jeje")
                registerApproved()
            }else{
                console.log("El registro no se completó")
                registerRechazo()
            }
        })
})