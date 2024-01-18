import { crearBody } from "../send/sendInfo.js";

let btn = document.getElementById("sendInfo");
btn.addEventListener("click",async function(){
    let json=crearBody();
    let id = localStorage.getItem("currentID");
    if(id!==null){
        const rta = await fetch(`https://probable-fishstick-r4g5w5wj9q7wcqv4-3000.app.github.dev/users/${id}`,{
            method:"PATCH",
            body: JSON.stringify({json}),
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            }

        })
        .then(response => response.json())
        .then(json => console.log(json))
        .catch(error => console.error("Error!!!: " + error));
    }else{
        alert("LOGIN FIRST")
    }

})




