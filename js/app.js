import loadJson from "./include-html/load-json.js";
import sliderComentarios from "./include-html/slider-comentarios.js";
import sliderAuto from "./include-html/slider.js";
import dateNow from "./include-html/time-date.js";
import opeModal from "./include-html/modal-open.js";
import validacionForm from "./include-html/validacion-form.js";


const d = document;
const $iconLinks = document.querySelectorAll(".navegacion i");
    $iconLinks.forEach((iconLinks) => {
        iconLinks.addEventListener("click", (e) => {
            const dataLinkValue = e.target.getAttribute("data-link");
        
            if(dataLinkValue){
                const targetSection = document.getElementById(dataLinkValue);
                
                if (targetSection) {
                    targetSection.scrollIntoView({ behavior: 'smooth' });
                }
           
            }

        
        });

      

        
    })




d.addEventListener("DOMContentLoaded",(e) => {
    dateNow();
    sliderAuto();
    sliderComentarios();
    loadJson();
    opeModal();
    validacionForm();

});