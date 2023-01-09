/**
* * Bienvenidos a la segunda parte del desafío E-Contact, la cual esta destinada a evaluar los conocimientos adquiridos de Javascript.
* * Este prueba constará de 20 ejercicios

* * NOTA1: El examen es individual
* * NOTA2: Fecha límite de entrega: Miércoles 11/01/2023 - 23:59hs

* * INFORMACION SOBRE EL DESARROLLO DE LOS EJERCICIOS:
* * Algunos ejercicios no tendrán que operar con el arreglo u objeto establecido a continuación, otros sí.
* * NO MODIFICAR el arreglo y objeto definido a continuación:
* * (Los datos son ficticios. El objeto es evaluar los conocimientos del alumno)
*/

const arregloFijo = [1, 3, 4, 7, 12, 18, 20, 26];
const numerosReales = [34.4552, 25.1543, 17.9438, 90.5, 67.82, 5, 9.99, 62.037];

const objetoFijo = {
  empresa: "E-Contact",
  datos: {
    empleados: 100,
    direccion: {
      calle: "Calle Córdoba",
      numero: 476,
      piso: 3,
    },
    sectores: [
      "Contabilidad",
      "Finanzas",
      "Informática",
      "Atención al público",
    ],
    sedes: {
      Chile: { telefono: 56227566262, empleados: 35 },
      Peru: { telefono: 5116358614, empleados: 25 },
      EEUU: { telefono: 17864978777, empleados: 43 },
      Ecuador: { telefono: null, empleados: 19 },
      Colombia: { telefono: 3178952449, empleados: 28 },
    },
  },
};

//? ================================= INICIO DEL DESAFIO. EXITOS A TODOS !!! =============================================================================

/**
 *? EJERCICIO 1: Crear una función la cual reciba un parámetro de tipo string con el nombre de la persona y retornar un nuevo string
 *? dependiendo del largo del nombre:
 *? Si el largo se encuentra entre 0 y 5 retornar "Es un nombre corto. Su largo es de: "
 *? Si el largo es 11 o mayor retornar "Es un nombre largo. Su largo es de: "
 *? IMPORTANTE: validar que el parámetro recibido sea un string al inicio de la función, de lo contrario, retornar "El parámetro recibido es invalido"
 *? RECORDATORIO: al leer la sentencia "return" termina la ejecución de la función.
 */

function largoDelNombre(nombre = "") {

    const largoNombre = nombre.length;

    if( typeof nombre === 'string ') 
        return "El parámetro recibido es invalido";

    if ( largoNombre > 0 && largoNombre < 5 ) {
        return `Es un nombre corto. Su largo es de: ${largoNombre}`;
    } else if ( largoNombre >= 11 ) {
        return `Es un nombre largo. Su largo es de: ${largoNombre}`;
    }

    return;

}
//! =======================================================================================================================================================

/**
 *? EJERCICIO 2: Crear una función que reciba un arreglo como parámetro y cuente cuantos valores de tipo "number" se encuentran dentro de dicho arreglo
 */

function contarTipoNumber(arreglo = []) {

    let count = 0;

    arreglo.forEach( elem => {

        if( typeof elem === 'number' )
            count++

    })

    return count;

}

// console.log("contarTipoNumber: ", contarTipoNumber(["12das", 2121, "#2asd", { nombre: 'Diego' }, 322]))
//! =======================================================================================================================================================

/**
 *? EJERCICIO 3: Crear una función que reciba un objeto como parámetro con los claves nombre, edad y altura, y retornar un string usando template literals
 *? con el siguiente formato: "Esta persona se llama XXX, tiene XXX años y su altura es de XXX"
 *? NOTA: Desestructurar los valores del objeto antes de utilizarlos
 */

function datosPersona(persona = {}) {
    
    let { nombre, edad, altura } = persona;

    return `Esta persona se llama ${nombre}, tiene ${edad} años y su altura es de ${altura}`;

}

// const test_persona = { nombre: 'Diego', edad: '27', altura: '1,70m'}

// console.log("datosPersona: ", datosPersona(test_persona));

//! =======================================================================================================================================================

/**
 *? EJERCICIO 4: Crear una función que reciba 2 (dos) parámetros de tipo "number" con el inicio y fin del rango a operar. Evaluar cuántos números dentro de
 *? ese rango son "pares". Luego, retornar un string con la frase "La cantidad de números pares obtenido fue de: "
 *?
 */

function obtenerCantidadDePares(numero1, numero2) {

    let countPares = 0;

    for(let i = numero1; i <= numero2; i++)
        if( i % 2 == 0 )
            countPares++ 

    return countPares;

}

// console.log("obtenerCantidadDePares: ", obtenerCantidadDePares(0, 12))
//! =======================================================================================================================================================

/**
 *? EJERCICIO 5: Crear una función que reciba el "objetoFijo" definido al inicio y retornar la "cantidad" de sedes que posee.
 *? Ayuda inicial: Primero asegurarse de obtener correctamente el objeto "sedes"
 *? De ser necesario utilizar un "contador" (no es obligatorio para su resolución)
 *? Recordar el método "Object.keys(nombreDelObjeto)" nos devuelve un arreglo de strings con los claves del objeto.
 *?

 */

function obtenerCantidadDeSedes(econtact = {}) {

    let {  datos: { sedes } } = econtact;

    return Object.keys(sedes).length;

}

// console.log("obtenerCantidadDeSedes: ", obtenerCantidadDeSedes(objetoFijo));
//! =======================================================================================================================================================

/**
 *? EJERCICIO 6: Crear una función que reciba el "objetoFijo" definido al inicio y retornar el teléfono de "Peru".
 *? Validar al inicio de la función si el teléfono de Perú existe. Caso contrario retornar un string que diga "Perú no tiene asignado un teléfono"
 */
function obtenerTelefonoPeru(econtact = {}) {

    let {  datos: { sedes } } = econtact;

    let { telefono } = sedes['Peru'];

    if ( telefono !== null )
        return telefono;

    return "Perú no tiene asignado un teléfono";

}
//! =======================================================================================================================================================

/**
 *? EJERCICIO 7: Crear una función que reciba el "objetoFijo" definido al inicio y retornar la cantidad de paises que cuentan con telefono asignado
 *?
 */

function obtenerPaisesConTelefono(econtact = {}) {  

    let countCountries = 0;

    let {  datos: { sedes } } = econtact;

    for( let key in sedes )
        if( sedes[key].telefono !== null )
            countCountries++
    
    return countCountries;

}

// console.log("obtenerPaisesConTelefono: ", obtenerPaisesConTelefono(objetoFijo));
//! =======================================================================================================================================================

/**
 *? EJERCICIO 8: Crear una función que reciba 3 (tres) parámetros: uno de tipo "string" con la operación matemática a realizar,
 *? un segundo y tercer parámetro ambos de tipo number. Dependiendo de ello realizar la operación correspondiente y retornar el resultado de esa operación.
 *? Los valores permitidos a recibir son:
 *? "+"
 *? "-"
 *? "*"
 *? "/"
 *? En caso contrario, retornar un string con la frase "La operación matemática que intenta realizar es inexistente"
 */

function calculoMatematico(operacion, numero1, numero2) {

    switch( operacion ) {
        case "+": return numero1 + numero2;
        case "-": return numero1 - numero2;
        case "*": return numero1 * numero2;
        case "/": return numero1 / numero2;
        default: return "La operación matemática que intenta realizar es inexistente";
    }

}

// console.log("calculoMatematico: ", calculoMatematico('x', 3, 2))
//! =======================================================================================================================================================

/**
 *? EJERCICIO 9: Crear una función que reciba un número como parámetro y, a partir de ahi, ir agregando ese mismo valor y los siguientes a un arreglo hasta que
 *? el número a ser evaluado sea igual al doble de ese número recibido como parámetro
 *? Validar al inicio de la función que el número sea positivo. De lo contrario retornar la frase "El número ingresado debe ser mayor a 0"
 *? Ayuda: usar ciclo while y recordar el método "push" para ir agregando valores al arreglo
 */

function cargarArreglo(numero) {

    if( numero < 1 ) 
        return "El número ingresado debe ser mayor a 0"

    let arreglo = [];

    let i = numero;

    while( i < numero*2 ) {

        arreglo.push(i);

        i++;
    }   

    return arreglo;

}

// console.log("cargarArreglo: ", cargarArreglo(5))
//! =======================================================================================================================================================

/**
 *? EJERCICIO 10: Crear una función que reciba un arreglo de números como parámetro y calcule cuántos de esos números son divisibles por 5.
 *? La función debe retornar la cantidad de números divisibles por 5.
 *?  Ayuda: Usar el operador módulo (o resto) "%"
 */

function divisiblesPorCinco(numeros = []) { 

    let count = 0;

    numeros.forEach( elem => {
        if( elem % 5 == 0 )
            count++;
    })

    return count;

}

// console.log("divisiblePorCinco: ", divisiblesPorCinco([2,3,5,6,10,15,10000]));
//! =======================================================================================================================================================

/**
 *? EJERCICIO 11: Crear una función que reciba un arreglo de números y realice la sumatoria de los mismos.
 *? La función debe retornar la sumatoria de esos números.
 *?
 */

function sumatoria(numeros = []) {

    return numeros.reduce((accumulator, currValue) => accumulator + currValue, 0)

}

// console.log("sumatoria: ", sumatoria([1,2,3,4,2]));  
//! =======================================================================================================================================================

/**
 *? EJERCICIO 12: Crear una función que reciba el "objetoFijo" definido al inicio y verificar si la cantidad total de empleados de E-Contact indicada (100) es igual
 *? a la sumatoria de los empleados de las sedes.
 *? La función debe retornar True si son iguales, o False en caso de no ser iguales
 */
  
function verificarCantidadEmpleados(econtact = {}) {    

    let { datos: { empleados, sedes }} = econtact;

    let total_empleados = 0;
    
    for(let key in sedes)
        total_empleados += sedes[key].empleados;
    
    return total_empleados == empleados; 

}

// console.log("verificarCantidadEmpleados: ", verificarCantidadEmpleados(objetoFij));

//! =======================================================================================================================================================

/**
 *? EJERCICIO 13: Crear una función que retorne un nuevo arreglo con el cuadrado de cada número del "arregloFijo" definido al inicio
 *? Ayuda: para calcular el cuadrado de un número podemos usar la expresión "**" o la clase "Math" con su método "pow". Ver ejemplos a continuación:
 *? Ejemplo de 3 al cuadrado:
 *? console.log(3 ** 2)
 *? Ejemplo de 5 al cuadrado:
 *? console.log(Math.pow(5, 2))
 */

function calcularCuadrados(arreglo = []) {

    return arreglo.map( elem => elem**2 );

}

// console.log("calcularCuadrados: ", calcularCuadrados(arregloFijo))
//! =======================================================================================================================================================

/**
 *? EJERCICIO 14: Crear una función que reciba como parámetro un arreglo de 6 (seis) números como mínimo y realizar la sumatoria de los mismos.
 *? Si la sumatoria supera un valor de 100 retornar True.
 *? Caso contrario retornar False.
 *? Validar al inicio de la función que el arreglo cuente con la condición establecida. Si no cumple la misma, retornar False
 */

function validarArreglo(numeros = []) {

    if ( numeros.length < 6 )
        return false;

    let sumatoria = numeros.reduce((accumulator, currValue) => accumulator + currValue, 0);

    if( sumatoria > 100 )
        return true;
    else
        return false;

}

//! =======================================================================================================================================================

/**
 *? EJERCICIO 15: Crear una función que reciba dos parámetros: un arreglo de strings con diferentes nombres, y un segundo parámetro con un nombre (string) cualquiera.
 *? La función debe retornar True si en ese arreglo se encuentra el nombre pasado como segundo parámetro. Caso contrario retornar False.
 *? Recordar que Javascript es "Case Sensitive", es decir, distingue entre mayúsculas y minúsculas.
 */

function validarNombre(nombres = [], nombre) {

    let found = nombres.find( curr_nombre => curr_nombre.toLowerCase() == nombre.toLowerCase() );

    return (found) ? true : false;

}

// console.log("validarNombre: ", validarNombre(["HoraciO", "Diego", "felipE"], "diRgo"));
//! =======================================================================================================================================================

/**
 *? EJERCICIO 16: Crear una función que reciba 2 (dos) parámetros: un arreglo de números y número. La función debe retornar la posición de ese valor en el arreglo
 */

function devolverPosicion(numeros = [], numero) {

    return numeros.findIndex( curr_num => curr_num == numero );

}

// console.log("devolverPosicion: ", devolverPosicion([4,56,88,12, 5, 6, 45], 5));
//! =======================================================================================================================================================

/**
 *? EJERCICIO 17: Crear una función que reciba 2 (dos) parámetros: el "objetoFijo" definido al inicio y un string. Retornar True si el segundo parámetro se encuentra
 *? dentro de los sectores de E-Contact. Caso contrario, retornar False
 */


function verificarSector(econtact = {}, sector) {

    let { datos: { sectores }} = econtact;

    let found = sectores.find( curr_sector => curr_sector == sector ); 

    return (found) ? true : false; 

}

// console.log("verificarSector: ", verificarSector(objetoFijo, "Informática"));
//! =======================================================================================================================================================

/**
 *? EJERCICIO 18: Crear una función que reciba 2 (dos) parámetros: el "objetoFijo" definido al inicio y un número (cantidad de empleados).
 *? La función debe retornar la cantidad de sedes que tengan una cantidad de empleados menor a la cantidad establecida como segundo parámetro.
 */

function verificarCantidadEmpleadosTwo(econtact = {}, cantidad) {

    let { datos: { sedes } } = econtact;

    let count = 0;

    for( let key in sedes ){
        if( sedes[key].empleados < cantidad )
            count++
    }

    return count;

}

// console.log("verificarCantidadEmpleadosTwo: ", verificarCantidadEmpleadosTwo(objetoFijo, 10 )) 
//! =======================================================================================================================================================

/**
 *? EJERCICIO 19: Crear una función que reciba 2 (dos) parámetros: un objeto y un string (clave a verificar). Si el objeto cuenta con la clave que se solicita
 *? como segundo parámetro, retornar True. Caso contrario retornar False.
 *? Ejemplo: El siguiente objeto cuenta con las claves nombre, edad y profesion. PERO no cuenta con la clave "altura" por ejemplo.
 *? const alumno = { nombre: 'Juan', edad: 35, profesion: 'programador' }
 *?
 */

function verificarClave(objeto = {}, clave) {

    return clave in objeto;

}

// console.log("verificarClave: ", verificarClave({ nombre: 'Juan', edad: 35, profesion: 'programador' }, "edad" ));
//! =======================================================================================================================================================

/**
 *? EJERCICIO 20: Crear una función que reciba un arreglo de numeros reales y retornar un nuevo arreglo con los mismos numeros pero quitando su parte decimal.
 *? Recordatorio: al inicio hay un arreglo de numeros reales como ejemplo.
 */

function quitarParteDecimal(arregloNumerosReales = []) {

    return arregloNumerosReales.map( real_num => Math.trunc(real_num) );

}

// console.log("quitarParteDecimal: ", quitarParteDecimal(numerosReales));