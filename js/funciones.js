/*****************************************/
/*                                       */
/*        DETECTOR DE DNI FALSOS         */
/*                                       */           
/*****************************************/

// Creo un array con la lista de posibles letras que puede contener un DNI.
listaLetras = ["T", "R", "W", "A", "G", "M", "Y", "F", "P", "D", "X", "B", "N", "J", "Z", "S", "Q", 
                "V", "H", "L", "C", "K", "E", "T"];

// Creo una función que recupera el nombre introducido.
function obtenerNombre() {
    // Añado variable que guarda el valor introducido en el primer input.
    var nombre = $("#nombre").val();
    return nombre.toUpperCase();
}

// Creo una función que devolverá el número del DNI, quitándole la letra.
function obtenerNumeroDni() {
    var dni = $("#dni").val();
    var numeroDni = dni.substring(0,8);
    return numeroDni;
}
