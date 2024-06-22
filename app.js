let botonApagar = document.getElementById("botonApagar");
let labelSwitch = document.querySelector(".labelSwitch");
let fondo = document.getElementById("Fondo");
labelSwitch.addEventListener("click", function () {
    if( labelSwitch.classList.toggle("active")){
        fondo.style.background = "hsl(0, 0%, 12%)"
    } else {
        fondo.style.background = "#fff"
    }
 
    
});
