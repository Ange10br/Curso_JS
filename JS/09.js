/* Async / Await */

function descargarNuevoClientes () {
    return new Promise(resolve => {                  //Crear una promesa que este forzada a cumplirse
        console.log('Descargando clientes... Espere...');

        setTimeout(() => {          //Hacer que un codigo tarde en ejecutarse
            
            resolve ('Los clientes fueron descargados');

        }, 5000);

    })
}

async function app () {                     //Async hace que la funcion se ejecute en paralelo al demas codigo evitando asi que demore en cargar el demas contenido

    try {
        const resultado = await descargarNuevoClientes()  //Await hace que el codigo a continuacion espere a que este termine de ejecutarse para poderse ejecutar tambien
        //mostrarClientes(resultado);      //Si el programa fuera real habria una funcion para mostrar los clientes pero esta tendria que esperar a que primero se carguen (mostrarClientes no existe y solo esun ejemplo)
        console.log(resultado);

        console.log('Este codigo espera a que se descarguen los clientes y despues se muestra');
        console.log('App lista');

    } catch (error) {
        console.log(error);
    }

    
}

app();

console.log('Este codigo esta despues de los nuevos clientes pero aparece antes por que la app es asincrona');




/* Dos consultas async await */

function descargarVideos () {
    return new Promise(resolve => {
        console.log('Descargando videos... Espere...');

        setTimeout(() => {
            resolve('Los videos han sido descargados')
        }, 3000);
    })
}

async function appClientesVideos () {                     //Async hace que la funcion se ejecute en paralelo al demas codigo evitando asi que demore en cargar el demas contenido

    try {
        // const resultado = await descargarNuevoClientes(); //Await hace que el codigo a continuacion espere a que este termine de ejecutarse para poderse ejecutar tambien
        
        // //mostrarClientes(resultado);      //Si el programa fuera real habria una funcion para mostrar los clientes pero esta tendria que esperar a que primero se carguen (mostrarClientes no existe y solo esun ejemplo)
        // console.log(resultado);

        const resultados = await Promise.all([descargarNuevoClientes(), descargarVideos()]);  //Ejecuta las dos funciones al mismo tiempo

        resultados.forEach(element => {
            console.log(element);
        });


        console.log('Este codigo espera a que se descarguen los clientes y los videos despues se muestra');
        console.log('App lista');

    } catch (error) {
        console.log(error);
    }

    
}

appClientesVideos();

/* Fetch API */

//Existe una forma de usar fetch con promises pero la mas eficiente es con async await

async function obtenerEmpleados () {
    const archivo = '../empleados.json';

    //Promises

    fetch(archivo)
        .then(resultado => resultado.json())
        .then(datos => {
            console.log(datos.empleados);

            const { empleados } = datos;

            console.log(empleados);
        })


    //Async Await

    const resultado = await fetch(archivo); 
    const datos = await resultado.json;
    console.log(datos);
}