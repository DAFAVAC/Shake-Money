
var monto = [10, 35, 25];
var planilla = ["1750135830", "0913222246"];
var valor = [28.10, 15.87];

document.getElementById("monto1").value = monto[0];
document.getElementById("monto2").value = monto[1];
document.getElementById("monto3").value = monto[2];

// ocultar imput
var numeroLuz = document.getElementById("numLuz");
numeroLuz.style.display = "none";
var numeroAgua = document.getElementById("numAgua");
numeroAgua.style.display = "none";

// click en radioluz
document.getElementById("pagoLuz").addEventListener("click", function () {
    numeroLuz.style.display = "block";
    numeroAgua.style.display = "none";
    document.getElementById("pagarAhora").value = "00.00";
    document.getElementById("numAgua").value = '';
})
//click en radioAgua
document.getElementById("pagoAgua").addEventListener("click", function () {
    numeroLuz.style.display = "none";
    numeroAgua.style.display = "block";
    document.getElementById("pagarAhora").value = "00.00";
    document.getElementById("numLuz").value = '';
})

// generar
document.getElementById("btnGenerar").addEventListener("click", function () {
    let luz = document.getElementById("numLuz").value;
    let agua = document.getElementById("numAgua").value;
    if (luz === planilla[0]) {
        document.getElementById("pagarAhora").value = valor[0];
    } else if (agua === planilla[1]) {
        document.getElementById("pagarAhora").value = valor[1];
    } else {
        alert("El código unificado esta incorrecto, por favor verificar");
        document.getElementById("numLuz").value = '';
        document.getElementById("numAgua").value = '';

    }
})
// click en bancos

document.getElementById("btnAceptar").addEventListener("click", function () {
    var pichincha = document.getElementById("a").checked;
    var guayaquil = document.getElementById("b").checked;
    var pacifico = document.getElementById("c").checked;
    var debito = Number(document.getElementById("pagarAhora").value);
    var montoPi = Number(document.getElementById("monto1").value);
    var montoG = Number(document.getElementById("monto2").value);
    var montoPa = Number(document.getElementById("monto3").value);

    if (pichincha == true && montoPi > debito) {
        var resta1 = montoPi - debito;
        alert("Se ha generado un débito de: " + debito);
        document.getElementById("monto1").value = resta1;
        document.getElementById("numLuz").value = '';
        document.getElementById("numAgua").value = '';
        document.getElementById("pagarAhora").value = "00.00";
    } else if(guayaquil == true && montoG > debito){
        var resta2 = montoG - debito;
        alert("Se ha generado un débito de: " + debito);
        document.getElementById("monto2").value = resta2;
        document.getElementById("numLuz").value = '';
        document.getElementById("numAgua").value = '';
        document.getElementById("pagarAhora").value = "00.00";
    }else if(pacifico == true && montoPa > debito){
        var resta3 = montoPa - debito;
        alert("Se ha generado un débito de: " + debito);
        document.getElementById("monto3").value = resta3;
        document.getElementById("numLuz").value = '';
        document.getElementById("numAgua").value = '';
        document.getElementById("pagarAhora").value = "00.00";
    }else{
        alert("No se ha podido realizar la transacción")
        document.getElementById("numLuz").value = '';
        document.getElementById("numAgua").value = '';
        document.getElementById("pagarAhora").value = "00.00";
    }



})



