export function filtrar($container, $tarjetas, $search){

    $search.addEventListener("keyup", (e) => {
        
        $tarjetas.forEach((el) => {

            if($search.value){
                (!el.getAttribute("data-tarjeta").toLowerCase().includes($search.value.toLowerCase()))
                ? el.classList.add("display-none")
                : el.classList.remove("display-none");
            }
            else{
                el.classList.remove("display-none")
            }
            
        })
    })


}