export function loginApproved(){
    let nickname = document.getElementById("nickname");
    let password = document.getElementById("pass");
    let login = document.getElementById("login_section");
    let register = document.getElementById("register_section");
    nickname.classList.add("correctLogin");
    password.classList.add("correctLogin");
    setTimeout(()=>{login.style.visibility = "hidden";login.style.display="none";
                    register.style.visibility = "hidden";register.style.display="none"},1000);
    
}