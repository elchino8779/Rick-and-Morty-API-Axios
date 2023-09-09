
export function mostrarInfo(e) {

    let tarjeta = e.target.closest(".tarjeta");
    tarjeta.querySelectorAll("p").forEach(el => console.log(el.textContent));
    tarjeta.querySelectorAll("img").forEach(el => console.log(el.getAttribute("src")));

    let imagenActual = tarjeta.querySelectorAll("img")[0].getAttribute("src");
    let [nombreActual, especiaActual, generoActual, origenActual, estadoActual] = tarjeta.querySelectorAll("p");

    let $tarjetaInfo = document.createElement("div");
    $tarjetaInfo.classList.add("tarjeta-info");
    let $containerCerrar = document.createElement("div");
    $containerCerrar.classList.add("container-btn-cerrar");
    let $botonCerrar = document.createElement("div");
    $botonCerrar.classList.add("btn-cerrar");
    $botonCerrar.innerHTML = '<i class="bi bi-x-circle"></i>';
    let $imgTarjeta = document.createElement("img");
    $imgTarjeta.classList.add("img-tarjeta");
    $imgTarjeta.setAttribute("src", imagenActual);
    let $nombreTarjeta = document.createElement("p");
    $nombreTarjeta.innerHTML = nombreActual.textContent;
    let $especieTarjeta = document.createElement("p");
    $especieTarjeta.innerHTML = especiaActual.textContent;
    let $generoTarjeta = document.createElement("p");
    $generoTarjeta.innerHTML = generoActual.textContent;
    let $origenTarjeta = document.createElement("p");
    $origenTarjeta.innerHTML = origenActual.textContent;
    let $estadoTarjeta = document.createElement("p");
    $estadoTarjeta.innerHTML = estadoActual.textContent;


    $containerCerrar.appendChild($botonCerrar);
    $tarjetaInfo.appendChild($containerCerrar);
    $tarjetaInfo.appendChild($imgTarjeta);
    $tarjetaInfo.appendChild($nombreTarjeta);
    $tarjetaInfo.appendChild($especieTarjeta);
    $tarjetaInfo.appendChild($generoTarjeta);
    $tarjetaInfo.appendChild($origenTarjeta);
    $tarjetaInfo.appendChild($estadoTarjeta);

    document.body.appendChild($tarjetaInfo);


    $botonCerrar.addEventListener("click", (e) => {
        document.body.removeChild($tarjetaInfo);
    })
}