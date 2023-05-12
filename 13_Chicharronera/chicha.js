function calcular() {
    // Obtener los valores de los rangos
    var a = parseFloat(document.getElementById("a").value);
    var b = parseFloat(document.getElementById("b").value);
    var c = parseFloat(document.getElementById("c").value);

    // Mostrar los valores de los rangos
    document.getElementById("valor_a").innerHTML = a;
    document.getElementById("valor_b").innerHTML = b;
    document.getElementById("valor_c").innerHTML = c;
    

    // Calcular el resultado

    var discriminante = Math.pow (b,2) - 4*a*c;
    if (discriminante >= 0) {
        var x1 = (-b + Math.sqrt(discriminante)) / (2*a);
        var x2 = (-b - Math.sqrt(discriminante)) / (2*a);
        document.getElementById("resultado").innerHTML = "x1 = " + x1.toFixed(2) + "<br>x2 = " + x2.toFixed(2);
    } else {
        document.getElementById("resultado").innerHTML = "La ecuación no tiene soluciones reales.";
    }
    document.getElementById("ResultA").innerHTML =a;
    document.getElementById("ResultB").innerHTML =b;
    document.getElementById("ResultC").innerHTML =c;
}