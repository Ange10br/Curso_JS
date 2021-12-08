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




/* Numbers o Numeros */

const numero1 = 100;
const numero2 = 200;
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

