import { checkUsuario } from "../modelo/checkUsuario.js";
import { habilitarCl } from "../modelo/habilitarCl.js";
import { habilitarFuncionario } from "../modelo/habilitarFuncionario.js"
let boton = document.getElementById("sendLogin");
boton.addEventListener("click",function(){
    console.log("Soy el boton send login")
    let user = document.getElementById("user").value;
    let pass = document.getElementById("pass").value;
    console.log("estos son el usuario y contraseña",user)
    console.log("estos son el usuario y contraseña",pass)
    checkUsuario(user,pass)
        .then(user_check=>{
            if (user_check===2){
                console.log("Recibo funcionario")
                habilitarFuncionario()
            }else if(user_check===3){
                console.log("Recibo cl")
                habilitarCl()
            }
        })
})