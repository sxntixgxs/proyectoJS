


export function crearBody(){
    let name = document.getElementById("name");
    let email = document.getElementById("email");
    let number = document.getElementById("number");
    let recordLabel = document.getElementById("recordLabel");
    let topsong = document.getElementById("topsong");
    let musicname = document.getElementById("musicname");
    let objeto = {"name":name,
                    "email":email,
                    "number":number,
                    "recordLabel":recordLabel,
                    "topsong":topsong,
                    "musicname":musicname};
    return objeto
}


