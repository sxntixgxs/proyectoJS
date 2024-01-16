export default async function generarTarjeta() {
    const vote_section = document.getElementById("vote");
    const respuesta = await fetch('https://probable-fishstick-r4g5w5wj9q7wcqv4-3000.app.github.dev/albums');
    const json = await respuesta.json();

    json.forEach(album => {
        const tarjeta = document.createElement("div");
        const img = document.createElement("img");
        const titl = document.createElement("h2");
        const desc = document.createElement("p");
        const btn_stats = document.createElement("button");
        const btn_vote = document.createElement("button");

        tarjeta.classList.add("card");
        img.classList.add("album1");
        img.src = album.imagen;
        titl.textContent = album.titulo;
        desc.textContent = album.texto
        titl.classList.add("titleAlbum");
        btn_stats.classList.add("btn_stats");
        btn_stats.id = "btn_stats";
        btn_stats.textContent = "SHOW CHARTS";
        btn_vote.classList.add("btn_vote");
        btn_vote.id = "btn_vote";
        btn_vote.textContent = "VOTE";

        tarjeta.appendChild(img);
        tarjeta.appendChild(titl);
        tarjeta.appendChild(desc);
        tarjeta.appendChild(btn_stats);
        tarjeta.appendChild(btn_vote);

        vote_section.appendChild(tarjeta);
    });
}
