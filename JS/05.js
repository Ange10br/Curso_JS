/* Bucles */

//For

for (let i = 0; i < 10; i++ ) {
    console.log(i);
}

for (let i = 0; i <= 100; i++ ){
    if (i == 0) {
        
        console.log('El numero 0 no se considera par');                      //Este codigo solo imprime los numeros pares
        
    } 
    else if (i % 2 == 0) {
        
        console.log(`${i} Es par`);

    } 
    else {

        console.log(`${i} Es impar`);

    }
}



//While

let i = 0;

while (i < 10) {
    console.log(i);
    i++;
}

//Do While

let index = 0;

do {
    console.log(index);
    index ++;
}while(index < 10);

/* Bucles de arrays */
const carrito = [
    {nombre: 'Monitor 20\"', precio: 500,},
    {nombre: 'Television 50\"', precio: 700,},
    {nombre: 'Tablet', precio: 300,},
    {nombre: 'Audifonos', precio: 200,},
    {nombre: 'Teclado', precio: 50,},
    {nombre: 'Celular', precio: 500,},
    {nombre: 'Bocinas', precio: 300,},
    {nombre: 'Laptop', precio: 800,},
]

//For Each

carrito.forEach(element => console.log(element.nombre));

//Map

const precios = carrito.map(element => element.precio);  //El codigo dentro de la funcion de map es lo que va a indicar de lo que se va a componer el nuevo arreglo
console.log(precios);
