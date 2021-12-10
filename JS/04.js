/* Estructuras de Control */

const puntaje = 1000;


//if - else if - else

if (puntaje == 1000) {                        //If verifica una condicion y si esta se comple el codigo dentro del if se aplica pero de no cumplirse lo ignora
    console.log ('Si, el puntaje es 1000');
}
else if ( puntaje == 500) {                     //else if verifica otra condicion en caso de que la anterior no haya sido valida y actua igual que el if
    console.log('El puntaje es 500');
}
else {                                          //else por si solo actua como ultimo recurso en caso de que ninguna  de las condiciones se haya cumplido
    console.log('Se desconoce el puntaje');
}

//switch

const metodoPago = 'Tarjeta';

switch (metodoPago) {                               //switch inicializa la estructura de control switch
    
    case 'Bitcoin':                                 //case indica la condicion a verificar
        console.log('Usted pagara con bitcoin');
        break;                                     //Break indica que el codigo no debe continuar por que el caso ya fue comprobado
    
    case 'Tarjeta':
        console.log('Su metodo de pago es tarjeta');
        break;

    default:
        console.log('Metodo de pago desconocido');
        break;
}