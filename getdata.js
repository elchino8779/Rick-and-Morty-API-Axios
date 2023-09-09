import { cargarTarjetas } from "./cargarTarjetas.js";
import { filtrar } from "./filtroTarjetas.js";

export async function getData($container, $search) {

    const $fragment = document.createDocumentFragment();

    try {
        let res = await axios.get("https://rickandmortyapi.com/api/character")
        let json = await res.data.results;

        json.forEach((el) => {
            cargarTarjetas($fragment, el);
        })

        $container.appendChild($fragment);


        for (let i = 0; i < res.data.info.pages; i++) {

            res = await axios.get(res.data.info.next);
            json = await res.data.results;

            json.forEach((el) => {
                cargarTarjetas($fragment, el);
            })
            $container.appendChild($fragment);

            if(res.data.info.next == null){
                break;
            }
        }

        const $tarjetas = document.querySelectorAll(".tarjeta[data-tarjeta]");

        filtrar($container, $tarjetas, $search);

        $tarjetas.forEach((el) => {
            el.addEventListener("click", (e) => {
                let tarjeta = e.target.closest(".tarjeta");
                tarjeta.querySelectorAll("p").forEach(el => console.log(el.textContent));
                tarjeta.querySelectorAll("img").forEach(el => console.log(el.getAttribute("src")))
            })
        })

    }

    catch (error) {

        console.log(`Error: ${error.response.status} no se realizo la peticion`)
    }
}