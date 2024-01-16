import { checkUsuario } from "./checkUsuario";
import { habilitaRegistro } from "./habilitarRegistro";
import { registrarUser } from "./registrarUser";
import { registerApproved } from "./registerApproved";
import { registerRechazo } from "./registerRechazo";

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