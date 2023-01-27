// condicionales: una secuencia condicional es un conjunto de comands que se ejecutan si una condición es verdadera. 
// JS soporta dos sentencias condicionales: if...else y switch. if para comprobar si la condición lógica es verdadera. else para ejecutar una sentencia si la condición es falsa.

var edad = 18;
if (edad >= 18) { //puede ser también edad > 17
    console.log("la persona es mayor de edad");
} else {
    console.log("la persona es menor de edad");
}

// iteradores: ejemplo. For se utiliza para cuando se sabe la cantidad de iteraciones que va a hacer ese ciclo
// for (inicialización); condición; incremento/decremento; 

var x = 0
 
for (x; x < 5; x++) {//incremento
    console.log("el valor de x es :"+x);//Sentencia
}

var x = 10
 
for (x; x > 0; x--) {//decremento
    console.log("el valor de x es :"+x);//Sentencia
}

// while (condicion) {
    //código que se va a ejecutar / se ejecutará el bloque de código mientras la condición sea verdadera
    //se usa para cuando no se sabe la cantidad de iteraciones de un ciclo
//}

var x = 10;

while (x > 0) {
    console.log("Mi variable vale"+x)
    x--;
}

//do...while: ejecuto una vez la secuencia, y después pregunto si sigo o no

var x = 10;

do {

} while (condition);

//break: termina con la iteración ante una condición

var x = 10;

for (x; x > 0; x--) {

    if (x == 5) {
        break
    }
    console.log("El valor de x es: "+x);//Sentencia
}