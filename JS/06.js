/* This */

const reservacion = {
    nombre: 'Angel',
    apellio: 'Obregon',
    total: 5000,
    pagado: false,
    informacion: function () {
        console.log(`El cliente ${this.nombre} reservo y su cantidad a pagar es de ${this.total}`); //This hace referencia al propio objeto, en este caso seria algo como 
                                                                                                    //reservacion.nombre pero en lugar de reservacion se usa this
    },
}

reservacion.informacion();

