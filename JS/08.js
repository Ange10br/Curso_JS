/* Promises */
const autenticado = true;  

const usuarioAutenticado = new Promise ( (resolve, reject) => {     //Declaracion de promesa
             //Promesa cumplida

    setTimeout(() => {
        if (autenticado) {
        resolve('Usuario autenticado');  //Lo que retorna a .then si la promesa se cumple
    } else {
        reject('No se pudo iniciar sesion'); //Lo que retorna a .catch de ser rechazada la promesa
    }
    }, 5000);
    
});


usuarioAutenticado
    .then( resultado => console.log(resultado)) //Codigo si la promesa se cumple
    .catch ( error => console.log(error))       //Codigo si la promesa no se cumple

    //Al usar promises el codigo que cotinua despues de la promesa se sigue ejecutando a pesar de que la promesa no se cumpla o este esperando
    console.log('hola mundo');


//En los promises existen 3 valores posibles

//Pending : No se ha cumplido pero tampoco se ha rechazado

//Fulfilled : Ya se cumplio

//Reject : Se ha rechazado o no se pudo cumplir


/* Ejemplo promise con Notification API */

const notificationButton = document.querySelector('#boton'); //Esta es la forma de llamar un elemento de html a JS por medio de su id o clase


notificationButton.addEventListener('click', function() {  // .addEventListener Escucha un evento y cuando lo recibe devuelve una funcion, ens este caso espera a recibir click y retorna algo
    Notification.requestPermission()                        //La API Notification ya tiene reject y resolve por su cuenta
        .then(resultado => console.log(`El resultado es ${resultado}`))
})

if (Notification.permission === 'granted') {                    //Si las notificaciones son aceptadas en la pagina entonces notification recibe un valor de 'granted', si no entocnes sera 'denied'
    new Notification('Hola, soy una notificacion', {
        body: 'Angel Obregon esta aprendiendo de la API Notification'
    })
}
