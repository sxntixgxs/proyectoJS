


export function crearBody(){
    let name = document.getElementById("name");
    let email = document.getElementById("email");
    let number = document.getElementById("number");
    let recordLabel = document.getElementById("recordlabel");
    let topsong = document.getElementById("topsong");
    let musicname = document.getElementById("musicname");
    let objeto = {"name":name.value,
                    "email":email.value,
                    "number":number.value,
                    "recordLabel":recordLabel.value,
                    "topsong":topsong.value,
                    "musicname":musicname.value};
    return objeto
}


