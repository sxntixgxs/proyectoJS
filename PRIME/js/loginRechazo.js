//cambiar el color de las cajitas a rojo suave y mostrar usuario y/o contraseña incorrectos


export function loginRechazo(){
    let nickname = document.getElementById("nickname");
    let password = document.getElementById("pass");
    let text = document.getElementById("incorrectText")
    nickname.classList.add("incorrectLogin");
    password.classList.add("incorrectLogin");
    text.style.visibility = "visible";

}