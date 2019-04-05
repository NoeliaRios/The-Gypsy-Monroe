var menuHamburguesa = document.getElementById('botonBurgu');
var menuDesplegado = document.getElementsByClassName('navVertical');

menuHamburguesa.onclick=function(){

    menuDesplegado[0].classList.add('displayBlock');
    
}