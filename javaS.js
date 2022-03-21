var panta = document.getElementById("pantalla");
var nUno = document.getElementById("uno");
var nDos = document.getElementById("dos");
var nTres = document.getElementById("tres");
var nCuatro = document.getElementById("cuatro");
var nCinco = document.getElementById("cinco");
var nSeis = document.getElementById("seis");
var nSiete = document.getElementById("siete");
var nOcho = document.getElementById("ocho");
var nNueve = document.getElementById("nueve");
var nCero = document.getElementById("cero");
var nSuma = document.getElementById("btnSuma");
var nResta = document.getElementById("btnResta");
var nMultiplica = document.getElementById("btnMultiplica");
var nDivide = document.getElementById("btnDivide");
var nLimpia = document.getElementById("btnLimpia");
var nIgual = document.getElementById("btnIgual");
var resutadoFinal = document.getElementById("h4Resultado");
var num1 = 0;
var num2 = 0;
var resultado = 0;
var operadorX;

nUno.addEventListener("click", function () {
    panta.value = panta.value + "1";
    var uno1 = parseInt(panta.value);
});
nDos.addEventListener("click", function () {
    panta.value = panta.value + "2";
    var dos2 = parseInt(panta.value);
});
nTres.addEventListener("click", function () {
    panta.value = panta.value + "3";
    var tres3 = parseInt(panta.value);
});
nCuatro.addEventListener("click", function () {
    panta.value = panta.value + "4";
    var cuatro4 = parseInt(panta.value);
});
nCinco.addEventListener("click", function () {
    panta.value = panta.value + "5";
    var cinco5 = parseInt(panta.value);
});
nSeis.addEventListener("click", function () {
    panta.value = panta.value + "6";
    var seis6 = parseInt(panta.value);
});
nSiete.addEventListener("click", function () {
    panta.value = panta.value + "7";
    var siete7 = parseInt(panta.value);
});
nOcho.addEventListener("click", function () {
    panta.value = panta.value + "8";
    var ocho8 = parseInt(panta.value);
});
nNueve.addEventListener("click", function () {
    panta.value = panta.value + "9";
    var nueve9 = parseInt(panta.value);
});
nCero.addEventListener("click", function () {
    panta.value = panta.value + "0";
    var cero0 = parseInt(panta.value);
});
nLimpia.addEventListener("click", function () {
    limpiar();
});
nSuma.addEventListener("click", function () {
    operadorX = "+";
    num1 = parseInt(panta.value);
    limpiar();
});
nResta.addEventListener("click", function () {
    operadorX = "-";
    num1 = parseInt(panta.value);
    limpiar();
});
nMultiplica.addEventListener("click", function () {
    operadorX = "*"
    num1 = parseInt(panta.value);
    limpiar();
});
nDivide.addEventListener("click", function () {
    operadorX = "/";
    num1 = parseInt(panta.value);
    if (num1 == 0) {
        alert("Su numero no puede ser 0")
    }
    limpiar();
});
nIgual.addEventListener("click", function () {
    num2 = parseInt(panta.value);
    operadores(operadorX);
    if (operadorX == "/" && num2 == 0) {
        alert("Su numero no puede dividirse en 0")
        limpiar();
    } else {
        num2 = parseInt(panta.value);
    }
});
function limpiar() {
    panta.value = "";
    resutadoFinal.value = "";
}
function operadores(operar) {
    if (operar == "+") {
        resultado = num1 + num2;
    } else if (operar == "-") {
        resultado = num1 - num2;
    } else if (operar == "*") {
        resultado = num1 * num2;
    } else if (operar == "/") {
        resultado = num1 / num2;
    } resutadoFinal.value = resultado;
}
var ingreso = document.getElementById("inputIng");
var resultadoConteo = document.getElementById("h4Caracter");
var mayCom = document.getElementById("comMay");
var minCom = document.getElementById("comMin");
var caraCont = document.getElementById("cantCara");
var resProx = 0;

mayCom.addEventListener("click", function () {
    mayuscula();
})
minCom.addEventListener("click", function () {
    minuscula();
})
caraCont.addEventListener("click", function(){
    contaC();
})
function mayuscula() {
    ingreso.value = ingreso.value.toUpperCase();
    resultadoConteo.innerHTML = ingreso.value;
}
function minuscula() {
    ingreso.value = ingreso.value.toLowerCase();
    resultadoConteo.innerText = ingreso.value;
}
function contaC (){
    resProx = ingreso.value.length
    resultadoConteo.innerText = "La cantidad de caracteres del texto es " + resProx + " unidades";
    
    
}