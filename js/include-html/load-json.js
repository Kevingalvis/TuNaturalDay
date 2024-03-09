export default function loadJson() {
    const $sliderComentarios = document.querySelector("#slider-comentarios");
    const $btnSugerencia = document.querySelector(".btn-sugerencia");
    const $textSugerencia = document.querySelector(".text-sugerencia");

   
console.log("1")




    fetch('assets/json/coments.json')
        .then(res => res.json())
        .then(data => {
          

            function agregarComentario(nuevoComentario) {
                Swal.fire({
                    position: "Enviado",
                    icon: "success",
                    title: "Gracias por dejar tu comentario",
                    showConfirmButton: true,
                   
                  });

                $sliderComentarios.innerHTML = '';
               $textSugerencia.value = '';
               
                data.push(nuevoComentario);
    
                data.forEach(comentario => {
                    const $li = document.createElement("li");
                    $li.classList.add("card");
                    $li.innerHTML = `
                        <div class="img">
                            <img src="${comentario.logo}" alt="user" draggable="false">
                            <h2>${comentario.name}</h2>
                            <span>${comentario.comentario}</span>
                        </div>
                    `;
                    $sliderComentarios.appendChild($li);
    
                });
               
              
            }

            data.forEach(comentario => {
                const $li = document.createElement("li");
                $li.classList.add("card");
                $li.innerHTML = `
                    <div class="img">
                        <img src="${comentario.logo}" alt="user" draggable="false">
                        <h2>${comentario.name}</h2>
                        <span>${comentario.comentario}</span>
                    </div>
                `;
                $sliderComentarios.appendChild($li);

            });
             

            





            // Ahora puedes usar la función agregarComentario para agregar nuevos comentarios
            $btnSugerencia.addEventListener("click", () => {
                if($textSugerencia.value === ''){
                    Swal.fire({
                        position: "Sin Datos",
                        icon: "error",
                        title: "escribe tu sugerencia",
                        showConfirmButton: true,
                       
                      });

                }else{
                    const nuevoComentario = {
                    
                        "name": "Naturla E-Store",
                        "comentario": `${$textSugerencia.value}`,
                        "logo": "../../assets/img/user/nuevo-usuario.jpg"
                    };
                    agregarComentario(nuevoComentario);

                }
               
            });








        })
        .catch(error => {
            console.error('Error al leer el archivo JSON:', error);
        });
        

        
   
}



