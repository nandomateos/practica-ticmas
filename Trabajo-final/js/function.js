
function myFunction1() {
        var element = document.getElementById("body");
        element.classList.add("mystyle1")
        element.classList.remove("mystyle2");
        var element = document.getElementById("light")
        element.classList.add("white_content1")
        element.classList.remove("white_content2");
}

function myFunction2() {
        var element = document.getElementById("body");
        element.classList.add("mystyle2")
        element.classList.remove("mystyle1");
        var element = document.getElementById("light")
        element.classList.add("white_content2")
        element.classList.remove("white_content1");
}

function increaseFontSize(id, increaseFactor){
        txt = document.getElementById(id);
        style = window.getComputedStyle(txt, null).getPropertyValue('font-size');
        currentSize = parseFloat(style);
        txt.style.fontSize = (currentSize + increaseFactor) + 'px';
}