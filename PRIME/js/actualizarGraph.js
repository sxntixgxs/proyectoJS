export function actualizarGrafico(datosActualizados) {
    myChart.data.labels = datosActualizados[0];
    myChart.data.datasets.forEach((dataset) => {
        dataset.data = datosActualizados[1];
    });
    myChart.update();
}
