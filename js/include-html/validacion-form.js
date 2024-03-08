const d = document;
const $inputName = document.getElementById("input-name"),
          $inputTel = document.getElementById("input-tel"),
          $inputEmail = document.getElementById("input-email");   

const $errName = document.getElementById("err-name"),
          $errTel = document.getElementById("err-tel"),
          $errEmail = document.getElementById("err-email");
const $form = d.getElementById("form"); 
const $buttonSubmit = document.getElementById("btn-submit");


export default function validacionForm () {
    $buttonSubmit.addEventListener("click", (e) =>{
        e.preventDefault();
          validacionInputs();
    }); 
}





const validacionInputs = () => {
    
     if($inputName.value === ""){
          $errName.classList.replace("err-none", "err-active");
        
     }else{
          $errName.classList.replace("err-active","err-none");
         
     }

     if($inputTel.value === ""){
          $errTel.classList.replace("err-none", "err-active");
          
     }else{
          $errTel.classList.replace("err-active","err-none");
     }    
     
     if($inputEmail.value === ""){
          $errEmail.classList.replace("err-none", "err-active");
     }else{
          $errEmail.classList.replace("err-active","err-none");
     }  

     if($inputName.value.length > 0 && $inputTel.value.length > 0 && $inputEmail.value.length > 0){
          envioDatos();
     }else{
          Swal.fire({
               title: "Datos Incompletos",
               text: "Los datos no estan completos",
               icon: "error"
             }); 
     }

}

const envioDatos = () => {
     $buttonSubmit.textContent = "Procesando...";
     $buttonSubmit.style.backgroundColor = "#bcbdbd";
     $buttonSubmit.disabled = true;
     Swal.fire({
          position: "Procesado...",
          icon: "warning",
          title: "Por Favor Espere...",
          showConfirmButton: false,
          timer: 10500
        });

        fetch("https://formsubmit.co/ajax/kevin.davidtt@gmail.com",{
          method: "POST",
          body: new FormData($form)
       })
          .then(res => res.ok?res.json():Promise.reject(res))
          .then(json => {
               Swal.fire({
                    title: "Envio Exitoso",
                    text: "Gracias por preferirnos!!",
                    icon: "success"
                  });                
          })
          .catch(err => {
             
               let message = err.statusText || "Ocurrio un error al enviar, intenta de nuevo"
               Swal.fire({
                    title: "Error!!",
                    text: `${message}`,
                    icon: "error"
                  }); 
          })
          .finally(() =>{
               $buttonSubmit.textContent = "Suscribete"
               $buttonSubmit.disabled = false;
               $buttonSubmit.style.backgroundColor = "#085f3f";

          });
          
}

