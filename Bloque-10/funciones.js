//funciones: es un elemento el cual tiene una entrada y una salida, generando en el medio una transformación.
//encapsula un pequeño bloque de código

//definimos la función hola mundo
function HolaMundo() {
    console.log("Hola Mundo!")
}

//una vez establecida la función, la puedo invocar las veces que se me cante.

HolaMundo();
HolaMundo();
HolaMundo();
HolaMundo();
HolaMundo();
HolaMundo();
HolaMundo();

function sumar(a,b) {
    var resultado = a+b;

    return resultado; 
}

suma = sumar(3,4);
console.log(suma);