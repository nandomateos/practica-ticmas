
//intenté por todas las formas posibles conseguir la info de la API de randomuser.me pero solo llego hasta poder obtener la info en la consola, y en formato string./*
$(document).ready(function (){
      $.ajax({
  url: 'https://randomuser.me/api/',
  dataType: 'json',
  success: function(data) {
    console.log(data);
    const obj = data;
    const myJSON = JSON.stringify(obj);
    console.log(myJSON);

    const API = JSON.stringify(obj);
    const objeto = JSON.parse(API);
    document.getElementById("nombre").innerHTML = objeto.results[0].name;

  }
});
})


function myFunction1() {
        var element = document.getElementById("body");
        element.classList.add("mystyle1")
        element.classList.remove("mystyle2")
        element.classList.remove("mystyle3");
        var element = document.getElementById("light")
        element.classList.add("white_content1")
        element.classList.remove("white_content2")
        element.classList.remove("white_content3");
}

function myFunction2() {
        var element = document.getElementById("body");
        element.classList.add("mystyle2")
        element.classList.remove("mystyle1")
        element.classList.remove("mystyle3");
        var element = document.getElementById("light")
        element.classList.add("white_content2")
        element.classList.remove("white_content1")
        element.classList.remove("white_content3");
}

function myFunction3() {
        var element = document.getElementById("body");
        element.classList.add("mystyle3")
        element.classList.remove("mystyle1")
        element.classList.remove("mystyle2");
        var element = document.getElementById("light")
        element.classList.add("white_content3")
        element.classList.remove("white_content1")
        element.classList.remove("white_content2");
}

function increaseFontSize(id, increaseFactor){
        txt = document.getElementById(id);
        style = window.getComputedStyle(txt, null).getPropertyValue('font-size');
        currentSize = parseFloat(style);
        txt.style.fontSize = (currentSize + increaseFactor) + 'px';
}