// Se asume que esta función se encuentra en el mismo archivo que el siguiente código
function crearBody(){
    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let number = document.getElementById("number").value;
    let recordLabel = document.getElementById("recordlabel").value;
    let topsong = document.getElementById("topsong").value;
    let musicname = document.getElementById("musicname").value;
    
    return {
        "name": name,
        "email": email,
        "number": number,
        "recordLabel": recordLabel,
        "topsong": topsong,
        "musicname": musicname
    };
}

// Manejo del evento click para el botón de envío
let btn = document.getElementById("sendInfo");
btn.addEventListener("click", async function(){
    let json = crearBody();
    console.log(json)
    let id = localStorage.getItem("currentID");

    if(id !== null){
        try {
            const response = await fetch(`https://probable-fishstick-r4g5w5wj9q7wcqv4-3000.app.github.dev/users/${id}`, {
                method: "PATCH",
                body: JSON.stringify({"musicInfo":json}),
                headers: {
                    'Content-Type': 'application/json; charset=UTF-8',
                }
            });

            if (!response.ok) {
                throw new Error('Network response was not ok ' + response.statusText);
            }

            const responseData = await response.json();
            console.log(responseData);
        } catch (error) {
            console.error("Error en la solicitud: ", error);
        }
    } else {
        alert("LOGIN FIRST");
    }
});
