export default async function generarTarjeta() {
    const vote_section = document.getElementById("vote");
    const respuesta = await fetch('https://probable-fishstick-r4g5w5wj9q7wcqv4-3000.app.github.dev/albums');
    const json = await respuesta.json();
    let i = 1;
    json.forEach(album => {
        const tarjeta = document.createElement("div");
        const img = document.createElement("img");
        const titl = document.createElement("h2");
        const desc = document.createElement("p");
        const btn_stats = document.createElement("a");
        const btn_vote = document.createElement("button");

        tarjeta.classList.add("card");
        img.classList.add("album1");
        img.src = album.imagen;
        titl.textContent = album.titulo;
        desc.textContent = album.texto
        titl.classList.add("titleAlbum");
        btn_stats.classList.add("btn_stats");
        btn_stats.id = `btn_stats${i}`;
        btn_stats.href = "#myChart";
        btn_stats.onclick="recarga()"
        btn_stats.textContent = "SHOW CHARTS";
        btn_vote.classList.add("btn_vote");
        btn_vote.id = `btn_vote${i}`;
        btn_vote.textContent = "VOTE";

        tarjeta.appendChild(img);
        tarjeta.appendChild(titl);
        tarjeta.appendChild(desc);
        tarjeta.appendChild(btn_stats);
        tarjeta.appendChild(btn_vote);

        vote_section.appendChild(tarjeta);
        i++
    });
    let eventoBotonesCreados = new Event('botonesCreados');
    document.dispatchEvent(eventoBotonesCreados);
    const btn1 = document.getElementById("btn_stats1");
    const btn2 = document.getElementById("btn_stats2");
    const btn3 = document.getElementById("btn_stats3");
    const btn4 = document.getElementById("btn_stats4");
    const btn5 = document.getElementById("btn_stats5");
    const btn6 = document.getElementById("btn_stats6");
    const btn7 = document.getElementById("btn_stats7");
    let botones = [btn1,btn2,btn3,btn4,btn5,btn6,btn7];
    botones.forEach(boton => {
    boton.addEventListener("click",()=>{
        console.log("se deberia cerrar")
        modal.classList.remove("modal--show")
    })
});
}
