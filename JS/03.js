/* Funciones */

const numero1 = 20;
const numero2 = 15;

function sumar (a,b) {  //Una funcion recibe argumentos con los que puede generar una accion o como su nombre indica una "funcion"
    const suma = a+b;   //Puede no recibir argumentos pero al ser llamada va a generar de igual forma la accion dentro de su codigo
    console.log(suma);
}
sumar(numero1, numero2); //En este caso recibe 2 argumentos que dentro de la funcion los suma por lo que retorna es la suma de dos argumentos recibidos


/* Formas de crearlas */
//Esxisten 3 formas de crear funciones

//1. Declaracion de funcion

function restar (a,b) {  //Se llama la palabra function seguida de el nombre de la funcion, sus argumentos y lo que va a ejecutar al ser llamada
    const resta = a-b;
    console.log(resta);
}
restar(numero1, numero2);

//2. Expresion de la funcion

const multiplicar = function (a,b) {  //Esta funcion se llama como variable
    const multiplicacion = a*b;
    console.log(multiplicacion);
}
multiplicar(numero1, numero2);

//3. IIFE

(function(a = numero1,b = numero2) {  //Esta funcion es util para proteger que no se mezclen las variables y funciones con las de otros archivos
    const dividir = a/b;
    console.log(dividir);
}());


/* La diferencia entre las dos primeras es que la primera sufre de hoisting lo que significa que si es 
llamada antes de ser declarada funcionara de la misma forma pero la Expresion de la Funcion marcara error */


/* Diferencia entre funciones y metodos */

const numeroString = '259';
console.log(parseInt(numeroString)); //parseInt() es una funcion
console.log( numero1.toString() ); //.toString() es un metodo


/* Funciones que retorna valores */

function restaMasSuma (a,b) {
    const resta = a-b;
    const suma = resta+a+b;
    return suma;                                          //Retorna el resultado de la suma para usarlo como variable de ser necesario en otra parte del codigo
}

//Arrow function
const restaMasSuma2 = (a,b) => {
    const resta = a-b;
    const suma = resta+a+b;
    return suma;
};


/* Metodos de propiedad */

const reproductor = {
    reproducir: function (id) {                                     //Una funcion al ser propiedad de un objeto se convierte en metodo ya que si se llama el objeto seguido de un .reproducir va a usar el metodo reproducir del objeto reproductor
        console.log(`Reproduciendo la cancion con el id ${id}`);
    },
    pausar: function () {
        console.log('Pausando...');
    },
}

reproductor.reproducir(3242323);
reproductor.pausar();

