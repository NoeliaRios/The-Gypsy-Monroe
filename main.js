var menuHamburguesa = document.getElementById('botonBurgu');
var menuDesplegado = document.getElementById('navVertical');
var botonCerrar = document.getElementById('botonCerrar');

menuHamburguesa.onclick = function(){

    menuDesplegado.classList.remove('displayNone');
    menuHamburguesa.classList.add('displayNone');
}

botonCerrar.onclick = function(){

    menuDesplegado.classList.add('displayNone');

}


