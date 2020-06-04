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
