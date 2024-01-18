//cambiar el color de las cajitas a rojo suave y mostrar usuario y/o contraseña incorrectos


export function loginRechazo(){
    let nickname = document.getElementById("nickname");
    let password = document.getElementById("pass");
    let text = document.getElementById("incorrectText")
    let register_text = document.getElementById("dont_account")
    nickname.classList.add("incorrectLogin");
    password.classList.add("incorrectLogin");
    text.style.visibility = "visible";
    register_text.classList.add("claveIncorrectaRegistro")
}