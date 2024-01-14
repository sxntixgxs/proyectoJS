async function leerTitl(i) {
    try {
        let url = `https://sxntixgxs.github.io/FRONTEND/datosPrime/db/desc.json`;
        let response = await fetch(url);
        let data = await response.json();
        let albumSoli = data.albums.find(album => album.id === i);
        return albumSoli ? albumSoli.titulo : '';
    } catch (error) {
        console.error("Error", error);
        throw error;
    }
}

async function leerDesc(i) {
    try {
        let url = `https://sxntixgxs.github.io/FRONTEND/datosPrime/db/desc.json`;
        let response = await fetch(url);
        let data = await response.json();
        let albumSoli = data.albums.find(album => album.id === i);
        return albumSoli ? albumSoli.texto : null;
    } catch (error) {
        console.error("Error", error);
        throw error;
    }
}

export default async function generarTarjeta() {
    const vote_section = document.getElementById("vote");
    let i = 1;

    while (i < 7) {
        try {
            const [titulo, descripcion] = await Promise.all([leerTitl(i), leerDesc(i)]);

            const tarjeta = document.createElement("div");
            const img = document.createElement("img");
            const titl = document.createElement("h2");
            const desc = document.createElement("p");
            const btn_stats = document.createElement("button");
            const btn_vote = document.createElement("button");

            tarjeta.classList.add("card");
            img.classList.add("album1");
            img.src = `https://sxntixgxs.github.io/FRONTEND/datosPrime/img/${i}.png`;
            titl.classList.add("titleAlbum");

            titl.textContent = titulo;
            if (descripcion !== null) {
                desc.textContent = descripcion;
            }

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

            i++;
        } catch (error) {
            console.error("Error al generar la tarjeta", error);
            break;
        }
    }
}


