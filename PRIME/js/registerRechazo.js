export function registerRechazo(){
    let nick = document.getElementById("register_nickname");
    let pass = document.getElementById("register_password");
    nick.classList.add("incorrectLogin");
    pass.classList.add("incorrectLogin");
}