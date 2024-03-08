const d = document;
export default function sliderComentarios () {
    const $sliderComentatio = document.getElementById("slider-comentarios");
    const $btnSlider = document.querySelectorAll("#comentarios i");
    const $firtCard = document.querySelector(".card").offsetWidth;


    let isDragging = false, startX, startScrollLeft;

    $btnSlider.forEach(btn => {
        btn.addEventListener("click", () => {
            $sliderComentatio.scrollLeft += btn.id === "left" ? - $firtCard:$firtCard;
        });
        

    });

    const dragStart = (e) => {
        isDragging = true;
        $sliderComentatio.classList.add("dragging");
        startX = e.pageX;
        startScrollLeft = $sliderComentatio.scrollLeft
    } 

    const dragging = (e) =>{
        if(!isDragging) return;
        $sliderComentatio.scrollLeft = startScrollLeft - (e.pageX - startX);
    }

    const dragStop = () => {
        isDragging = false;
        $sliderComentatio.classList.remove("dragging");
    } 

    $sliderComentatio.addEventListener("mousedown", dragStart);
    $sliderComentatio.addEventListener("mousemove", dragging);
    d.addEventListener("mouseup", dragStop);
}