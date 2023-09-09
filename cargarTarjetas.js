export function cargarTarjetas($fragment, el) {

    const $tarjeta = document.createElement("div");
    $tarjeta.classList.add("tarjeta");
    $tarjeta.setAttribute("data-tarjeta", el.name)

    const $img = document.createElement("img");
    $img.setAttribute("src", el.image);

    const $nombre = document.createElement("p");
    $nombre.innerHTML = `Nombre: ${el.name}`;

    const $especie = document.createElement("p");
    $especie.innerHTML = `Especie: ${el.species}`;

    const $genero = document.createElement("p");
    $genero.innerHTML = `Genero: ${el.gender}`;

    const $origen = document.createElement("p");
    $origen.innerHTML = `Origen: ${el.origin.name}`;

    const $estado = document.createElement("p");
    $estado.innerHTML = `Estado: ${el.status}`;

    $tarjeta.appendChild($img);
    $tarjeta.appendChild($nombre);
    $tarjeta.appendChild($especie);
    $tarjeta.appendChild($genero);
    $tarjeta.appendChild($origen);
    $tarjeta.appendChild($estado);


    $fragment.appendChild($tarjeta);
}