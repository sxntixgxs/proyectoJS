export function loginApproved(){
    let nickname = document.getElementById("nickname");
    let password = document.getElementById("pass");
    let login = document.getElementById("login_section")
    nickname.classList.add("correctLogin");
    password.classList.add("correctLogin");
    setTimeout(()=>{login.style.visibility = "hidden";login.style.display="none";},1000);
    
}