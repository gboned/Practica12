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

// Creo una función que devolverá únicamente la letra del DNI introducido.
function obtenerLetraDni() {
    var dni = $("#dni").val();
    var letraDni = dni.substring(8);
    return letraDni;
}

// Creo una función que compruebe que la letra del DNI introducido sea la correcta para ese número.
function comprobarDni(numeroDni, letraDni) {
    var posicionLetraDni = numeroDni % 23;
    // Letra a la cual correspondería el número de DNI.
    var letraDniCorrecta = listaLetras[posicionLetraDni];
    if (letraDni.toUpperCase() == letraDniCorrecta ) {
        $("#texto-retorno").html("<p id='dniCorrecto'>El DNI " + obtenerNumeroDni() + obtenerLetraDni().toUpperCase() + " de " + obtenerNombre() + " es correcto.</p>");
    } else {
        $("#texto-retorno").html("<p id='dniIncorrecto'>El DNI " + obtenerNumeroDni() + obtenerLetraDni().toUpperCase() + " de " + obtenerNombre() + " es incorrecto.</p>");
    }
}

// Creo función que tenga lugar al darle al botón.
$("form").submit(function(e) {
    e.preventDefault();
    comprobarDni(obtenerNumeroDni(), obtenerLetraDni());
})