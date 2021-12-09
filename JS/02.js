"use strict"; //Correr JS en modo estricto

/* Strings o cadena de texto */

//Formas de declararlos
const producto = "Monitor de 20\"";
const producto2 = 'Monitor 25 Pulgadas';
const producto3 = String('Monitor 30 Pulgadas');
const producto4 = new String('Monitor 50 Pulgadas');

//Metodos de Strings
producto.length; //Indica la cantidad de caracteres que tiene un string
producto.indexOf('Monitor');//Retorna la posicion de la palabra iniciando desde la posicion 0 y en caso de no contenerla retorna -1
producto.includes('de 20');//Retorna true o flase en caso de tener o no la palabra o texto indicado

//concatenar
producto + producto2; //Une los 2 textos
console.log('Hola, el producto que elegiste es ' + producto + " y su precio es de " + "3600");//Concatenacion larga

//Template Strings - string literals
console.log(`Nombre Producto: ${producto} Precio `);






/* Numbers o Numeros */

const numero1 = 100;
let numero2 = 200;
const numero3 = 200.20;
const numero4 = .1020;
const numero5 = -5;

//operadores de numeros
console.log(numero1 + numero2); //Suma
console.log(numero1 - numero2); //Resta
console.log(numero1 * numero2); //Multiplicacion
console.log(numero1 / numero2); //Division
console.log(numero1 % numero2); //Residuo de la division de los 2 noumeros

//Objeto Math



//incrementos y decrementos
numero2++; //Le suma 1 al numero despues de imprimirlo
++numero2;//Le suma 1 al numero antes de imprimirlo

numero2--; //Le resta 1 al numero despues de imprimirlo
--numero2; //Le resta 1 al numero antes de imprimirlo






/* Booleanos */

const booleanTrue = true; //Valor true indica que algo es verdadero o existe
const booleanFalse = false;//Valor false indica que una declaracion es falsa o no existe







/* Objetos */

//Al querer crear un producto con su nombre, precio y disponibilidad, es probable con la informacion anterior querer hacer lo siguiente:
const nombreProducto1 = 'Monitor 20\"';
const precioProducto1 = 300;
const disponibleProducto1 = true;

//Pero no es la forma correcta y mucho menos la mas eficiente y por ello existen los objetos:
const producto1 = {
    nombreProducto: 'Monitor 20\"',
    precioProducto: 300,
    disponibleProducto: true,
};

//Al llamar un objeto nos retornara todas sus propiedades, por ello es importante 
//que si queremos llamar solo una de ellas usemos la siguente sintaxis

producto1.nombreProducto; //nombreDelObjeto.propiedadDelObjeto

//Pero existe otra forma que es menos usada: 
producto1['nombreProducto']; //nombreDelObjeto['propiedadDelObjeto']


//Modificar objetos

producto1.imagen = 'IMAGEN'; //Crear una nueva propiedad con su valor
delete producto1.imagen; //eliminar la propiedad seleccionada
producto1.precioProducto = 3000; //Moddificar propiedad

//Destructuring

const {nombreProducto, precioProducto, disponibleProducto} = producto1; //crea distintas variables dependiendo de las propiedades 
                                                                        //que se indiquen para llamarlas de forma individual cuando se requiera

//Object Methods

Object.freeze(producto1); //Evita que las porpiedades de objeto sean modificadas, agregadas o eliminadas
Object.seal(producto1)//Evita que las propiedades del objeto sean borradas, agregadas pero pueden ser modificadas

//Mas sobre object methods
//https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Object


const medidas = {
    peso: '1kg',
    medida:'1m',
}

//Rest Operator 

const nuevoProducto = {...producto1, ...medidas}; //Une dos objetos en uno solo
console.log(nuevoProducto);








/* Arreglos o arrays */

const numeros = [10,20,30,40,50]; //Crear un arreglo
console.log(numeros);

const meses = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo'];

const arreglo1 = ['Hola', 10, true, null, {nombre:"Angel", trabajo:"Programador"}, [1,2,3]];
console.log(arreglo1);

//modificar un elemento de un array
arreglo1[1] = 20;
console.log(arreglo1);

//Acceder a elementos de ur Array
console.log(arreglo1[0]); //Retorna 'hola' en la consola ya que el primer indice en un array es el 0

meses.forEach(function(mes) {    //Este se considera un metodo que corre un mismo codigo por cada elemento en la lista
    console.log(mes)
})


//Metodos de Arrays
arreglo1.push('jeje'); //Agrega el elemento indicado al final de la lista
console.log(arreglo1);

arreglo1.pop();  //Elimina el ultimo elemento de un arreglo
console.log(arreglo1);

arreglo1.unshift(':)'); //Agrega un elemento al inicio de un arreglo
console.log(arreglo1);

arreglo1.shift();//Elimina el primer elemento de un arreglo
console.log(arreglo1);

const indiceDelArreglo = arreglo1.indexOf(true); //Indica el indice del elemento seleccionado y de no existir retorna -1
console.log(indiceDelArreglo);

const arregloDeElementosEliminados = arreglo1.splice(1,3); //Elimina los elementos del array seleccionado empezando por el inidce 
                                                           //indicado y tomando la cantidad de elementos para retornarlos en la variable como un nuevo arreglo
console.log(arregloDeElementosEliminados);
console.log(arreglo1);

