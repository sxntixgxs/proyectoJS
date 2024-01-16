export function registerApproved(){
    let nick = document.getElementById("register_nickname");
    let pass = document.getElementById("register_password");
    let register = document.getElementById("register_section");
    nick.classList.add("correctLogin");
    pass.classList.add("correctLogin");
    setTimeout(()=>{loginApproved.style.visibility="hidden";loginApproved.style.display="none";},1000)
}