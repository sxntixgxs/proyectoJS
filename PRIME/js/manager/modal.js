

//modal cuando se preisone approaves
const abreModal = document.getElementById("ap");
const modal = document.querySelector('.modal');
const cerrar = document.querySelector('.close-modal')
let id = localStorage.getItem("currentID")
document.addEventListener('DOMContentLoaded',function(){
    abreModal.addEventListener('click',e=>{
        e.preventDefault();
        console.log("SI ESTOY LEYENDO EL CLIC")
        // escribir()
        modal.style.visibility = "visible"
        modal.classList.add("modal--show")
        // if(id){
        //     abrirLogin()
        // }{
        //     habilitarVotacion()  
        // }
    })
    cerrar.addEventListener('click',e=>{
        e.preventDefault()
        modal.classList.remove("modal--show")
    })
})
