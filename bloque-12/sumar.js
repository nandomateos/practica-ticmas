
/* en este ejemplo, js entiende a los valores numeroA y numeroB como caracteres, entonces la suma no funciona

document.getElementById('sumar').addEventListener('click', function(){
    let numeroA = document.getElementById('numero1').value;
        console.log('El valor del numero A es: '+numeroA);

    let numeroB = document.getElementById('numero2').value;
        console.log('El valor del numero B es: '+numeroB);

    let resultado = sumar(numeroA, numeroB);
        console.log('El resultado de la suma es: '+resultado)

    document.getElementById('resultado').innerHTML = resultado;
    document.getElementById('contenedorResultado').style.display = 'block'
});

function sumar(a,b){
    return a+b;
}
*/

document.getElementById('sumar').addEventListener('click', function(){
    let numeroA = document.getElementById('numero1').value;
        console.log('El valor del numero A es: '+numeroA);

    let numeroB = document.getElementById('numero2').value;
        console.log('El valor del numero B es: '+numeroB);

    let resultado = sumar(parseInt(numeroA), parseInt(numeroB)); //parseInt convierte caracteres en números
        console.log('El resultado de la suma es: '+resultado)

    document.getElementById('resultado').innerHTML = resultado;
    document.getElementById('contenedorResultado').style.display = 'block'
});

function sumar(a,b){
    return a+b;
}