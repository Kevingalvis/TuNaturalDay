export default function opeModal (){
    const $btnOpenModal = document.querySelector("#btn-catalogo");
    const $btnClosedModal = document.querySelector(".btn-modal-close");
    const $contModal = document.querySelector("#modal-catalogo");
    const $contCatalogo = document.querySelector(".catalogo-productos");
    console.log($contCatalogo)

    $btnOpenModal.addEventListener("click",() =>{
        $contModal.classList.add("catalogo-active");
    });
    $btnClosedModal.addEventListener("click",() =>{
        $contModal.classList.remove("catalogo-active");
    });

    fetch("assets/json/catalogo.json")
        .then(res => res.json())
        .then(data =>{
            
            data.forEach(element => {
               const $divCard = document.createElement("div");
                    $divCard.classList.add("catalogo-card");
                    $divCard.innerHTML = `
                        <figure class="catalogo-card-img">
                            <img src="${element.img}" alt="productos">
                        </figure>
                
                        <div class="catalogo-card-description">
                            <h2>${element.name}</h2>
                            <h4>$${element.precio} <span>COL</span></h4>
                            <a href="https://api.whatsapp.com/send?phone=573015900263&text=Me Interesa Este Producto Quiero Mas Informacion🌿%0A${element.mini}%0A"  target="_blank">Solicitar</a>
                        </div>

                    `
                $contCatalogo.appendChild($divCard);
               console.log($divCard);
            });
        })
        .catch(error =>{
            console.log(error);

        });


}




/**
 *  <div class="catalogo-card">
                    <figure class="catalogo-card-img">
                        <img src="../../assets/img/slider/producto-1.png" alt="productos">
                    </figure>
                    
                    <div class="catalogo-card-description">
                        <h2>COLAGENO HIDROLIZADO + VITAMINA E, BIOTINA X 60 CÁPSULAS</h2>
                        <h4>$60.000 <span>COL</span></h4>
                        <button>Solicitar</button>
                    </div>
    </div>
 * 
 * 
 */
