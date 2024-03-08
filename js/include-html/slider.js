const $slides = document.querySelectorAll(".slider-slide");
const $slideImg = document.querySelectorAll(".slider-slide img");
const $contSliderBtn = document.querySelector(".slider-button");

const d = document;
/** CREAMOS LA FUNCION DEL SLIDER PARA QUE SE EJECUTE AUTOMATICAMENTE Y EL PREVISUALIZADOR QUE FUNCIONA COMO BOTONES PARA VER LAS IMAGENES */
export default function sliderAuto() {
    if (!$slides || $slides.length === 0) return;
   
    let currentIndex = 0;
    /** FUNCION QUE NOS VA A MOSTRAR EL SLIDER EN SI CON EL SET TIME OUT DE MAS ADELANTE */
    function showSlide(index) {
      // RECORREMOS TODAS LAS SLIDES Y LE QUITAMOS LA CLASE ACTIVE 
      $slides.forEach(slide => {
        slide.classList.remove("active");
      });
      // VOLVEMOS AGREGAR LA CLASE PERO ESTA VES, SE AGREGA A LA SLIDER ACTUALMENTE OBTENIA EN LA VARIABLE INDEX PARA SOLAMENTE MOSTRAR ESA SLIDE
      $slides[index].classList.add("active");   
    }

     /** CREAMOS NUESTRO VISUALIZADOR O BOTONES DEL SLIDER */
   
     $slideImg.forEach((imgBotton,index) => {
      
      const $div = document.createElement("div");
     
      $div.classList.add("img-botton");
      $div.innerHTML = `<img src="${imgBotton.getAttribute("src")}" alt="banne1">`
      $contSliderBtn.appendChild($div);

      $div.addEventListener("click",(e) =>{
        currentIndex = index;
        showSlide(currentIndex);
      });

    });
    



    /** CREAMOS LA FUNCION SETTIMEOUT QUE NOS VA HACER QUE HAGA EL CAMBIO DE IMAGEN AUTOMATICAMENTE */
    function nextSlide() {

      currentIndex = (currentIndex + 1) % $slides.length;
      /** AGREGAMOS EL VALOR DEL CONTADOR PARA QUE VAYA ACTUALIZANDO */
      showSlide(currentIndex);
      /** ESTE ES NUESTRO SET TIME OUT QUE VA A IR ACTUALIZANDO CADA CIERTO TIEMPO */
      setTimeout(nextSlide, 20000); // Cambia la imagen cada 10000 milisegundos (3 segundos)
   
    }
    
   

    nextSlide();     

}