var menuHamburguesa = document.getElementById('botonBurgu');
var menuDesplegado = document.getElementById('navVertical');


menuHamburguesa.onclick = function(){

    menuDesplegado.classList.remove('displayNone');
    menuHamburguesa.classList.add('displayNone');
}
