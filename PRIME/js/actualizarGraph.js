import { albumVotos } from "./valoresGraph.js";
function actualizarGrafico(datosActualizados) {
    //acceder al primer valor de data
    //myChart.data.datasets[0].data[0] =
    myChart.data.datasets[0].data = datosActualizados[1];
    myChart.update();
}
const act = document.getElementById("update_votes");


act.addEventListener("click",async function(){
    try{
        let datos = await albumVotos();
        actualizarGrafico(datos[1])
    }catch(error){
        console.error("hubo un error al obtener los datos",error)
    }

})