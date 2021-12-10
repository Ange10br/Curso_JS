/* Object Constructor y Object Literal */

//Object Literal

const producto = {        
    nombre: 'Tablet',
    precio: 500,
}

/*  Object Costructor */

class Producto {
    constructor (nombre, precio) {
        this.nombre = nombre;  //this.nombre hace referencia a la propiedad 'nombre' del objeto a crear y su valor va a ser lo que pasen en el parametro "nombre"
        this.precio = precio;  //this.precio hace referencia a la propiedad 'precio' del objeto a crear y su valor va a ser lo que pasen en el parametro "precio"
    }

    //Agregar prototype

    formatearProducto () {
        return `El nombre del producto es ${this.nombre} y tiene un costo de $${this.precio}`;     //Seguimos utilizando this para hacer referencia a las propiedades del objeto
    }

    formatearPrecioProducto () {
        return `El precio del producto seleccionado es de $${this.precio} MXN`;
    }
    
}

//Herencia

class Libro extends Producto {    //Con extends indicamos que libro hereda las caracteristicas de Producto incluyendo sus metodos exclusivos o Prototypes                
    constructor (nombre, precio, isbn) {
        super(nombre, precio);    //Indica los atributos que va a heredar del padre
        this.isbn = isbn;
    }

    formatearLibro () {
        return `${super.formatearProducto()} y su ISBN es ${this.isbn}`;    
    }

}

const libro = new Libro('JavaScript La Revolucion', 120, '12332523453453452');
console.log(libro.formatearProducto());      //Al ser heredero de 'Producto' tambien puede usar sus metodos o Prototypes

const producto2 = new Producto('Monitor curvo de 49\"', 800);
const producto3 = new Producto('Tablet', 400);

console.log(producto2);
console.log(producto2.formatearProducto());
console.log(producto2.formatearPrecioProducto());

console.log(producto3);
console.log(producto3.formatearProducto());




/* Esta es la forma antigua del object constructor donde en lugar de clases se usaban funciones */

// //Object Constructor

// function Producto (nombre, precio, disponible) {       //Esto en otros lenguajes de programacion se le conoce como clase pero en JS se usa Function para crear clases
//     this.nombre = nombre;                  //this.nombre hace referencia a la propiedad 'nombre' del objeto a crear y su valor va a ser lo que pasen en el parametro "nombre"
//     this.precio = precio;   
//     this.disponible = disponible;               //this.precio hace referencia a la propiedad 'precio' del objeto a crear y su valor va a ser lo que pasen en el parametro "precio"
// }

// const producto2 = new Producto('Monitor curvo de 49\"', 800, true); //Objeto construido con el object constructor
// const producto3 = new Producto('Tablet', 400, false); //Objeto construido con el object constructor

// console.log(producto2);
// console.log(producto3);




// /* Prototype */


// //Si tuvieramos otra clase que no fuera producto podriamos aplicarle tambien la siguente funcion, es por esto que existe el prototype

// function formatearProducto (producto) {

//     return `El nombre del producto es ${producto.nombre}, tiene un costo de $${producto.precio} y su disponibilidad es de ${producto.disponible}`;

// }

// //El prototype nos va a permitir crear funciones que solo se utilizan en un objeto en especifico

// Producto.prototype.formatearProducto = function() {               //De este modo ya no requiere que se le pase un parametro por que ahora va a actuar como metodo
//     return `El nombre del producto es ${this.nombre}, tiene un costo de $${this.precio} y su disponibilidad es de ${this.disponible}`;
// }

// console.log (producto2.formatearProducto());




