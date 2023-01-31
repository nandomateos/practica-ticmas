
/**
document.getElementById('boton').onclick = function () {
    console.log("Capturamos el evento Click");
    document.getElementById("demo").innerHTML = "Estamos probando nuestro primer evento en JS";
}
 */
// addEventListener: un escuchador de eventos. Determina qué tipo de escuchador es y a qué se lo va a aplicar

/**
document.addEventListener('click', function() {
    console.log("Hola Mundo desde EventListener")
    document.getElementById("demo").innerHTML = "Estamos probando nuestro primer evento en JS";
})
*/

document.getElementById('boton').addEventListener('click', function() {
    console.log("Hola Mundo desde EventListener")
    document.getElementById("demo").innerHTML = "Estamos probando nuestro primer evento en JS";
})

document.getElementById('boton_color').addEventListener('click', function() {
    document.body.style.backgroundColor = "#ff0000";
})

document.getElementById('boton_default').addEventListener('click', function() {
    document.body.style.backgroundColor = "blue";
})

document.getElementById('boton_hide').addEventListener('click', function() {
    document.getElementById("demo").style.display = 'none';
})

const collection = document.getElementsByClassName("parrafo");
for (let i = 0; i < collection.length; i++) {
    collection[i].style.backgroundColor = "green";
}