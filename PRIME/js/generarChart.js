
import { albumVotos } from "./valoresGraph.js";
let myChart = null;
async function iniciarGraph(){
    let datos= await albumVotos();
    console.log("estos son los datos",datos)

    var ctx = document.getElementById('myChart').getContext('2d');
    if(myChart){
        myChart.destroy();
    }
    myChart = new Chart(ctx, {        
        type: 'bar',
        data: {
        labels: datos[0],
        datasets: [{
            label: 'USERS VOTE',
            data: datos[1],
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(255, 159, 64, 0.2)',
                'rgba(255, 99, 132, 0.2)'
            ],
            borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)',
                'rgba(255, 99, 132, 1)'
            ],
            borderWidth: 1
        }]
    },
    options: {
        scales: {
            y: {
                beginAtZero: true
            }
        },
        responsive: true,
        maintainAspectRatio: false
    }
});
}
document.addEventListener('DOMContentLoaded', (event) => {
    const act = document.getElementById("update_votes");
    act.addEventListener("click", iniciarGraph);
});


iniciarGraph();

// Añadir el manejador de eventos después de asegurarse de que el gráfico esté inicializado
