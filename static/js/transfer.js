//boton transferir
var monto = [50, 35, 25];
var cuentas=[55];
var numerosAtransferir=["c1"];
document.getElementById("monto1").value = monto[0];
document.getElementById("monto2").value = monto[1];
document.getElementById("monto3").value = monto[2];

document.getElementById("account1").value=cuentas[0];


document.getElementById("btnRealizar").addEventListener("click", function () {

    //radiosbuttons
  var pichincha = document.getElementById("a").checked;
  var guayaquil = document.getElementById("b").checked;
  var pacifico = document.getElementById("c").checked;
  //cuenta a transferir
  var cuentaTrasnferir=document.getElementById("numeroDeCuenta").value;
  
 // montos de los bancos
  var montoPichincha = Number(document.getElementById("monto1").value);
  var montoGuayaquil = Number(document.getElementById("monto2").value);
  var montoPacifico = Number(document.getElementById("monto3").value);
  //montos de las cuentas
  var monCuenta1=Number(document.getElementById("account1").value=cuentas[0]);
  
  //ingreso de datos
  var monto=Number(document.getElementById("valorTransferir").value);
  
  if (pichincha == true && monto<montoPichincha){
    if(cuentaTrasnferir===numerosAtransferir[0]){

    var restaPi1=montoPichincha-monto;
     //var sumaPi1=monto + monCuenta1;
     cuentas[0]+=monto;
     document.getElementById("account1").value=cuentas[0];
     document.getElementById("monto1").value=restaPi1;
  

    } 
  }
  
  else if (guayaquil == true && monto<montoGuayaquil){
    if(cuentaTrasnferir===numerosAtransferir[0]){

    var restaPi1=montoGuayaquil-monto;
     //var sumaPi1=monto + monCuenta1;
     cuentas[0]+=monto;
     document.getElementById("account1").value=cuentas[0];
     document.getElementById("monto2").value=restaPi1;
     

    }
  }
  else if (pacifico == true && monto<montoPacifico){
    if(cuentaTrasnferir===numerosAtransferir[0]){

    var restaPi1=montoPacifico-monto;
     //var sumaPi1=monto + monCuenta1;
     cuentas[0]+=monto;
     document.getElementById("account1").value=cuentas[0];
     document.getElementById("monto3").value=restaPi1;
     

    }
  }
  else{
    alert("No se ha podido realizar la transacción")
    document.getElementById("valorTransferir").value=""
    document.getElementById("numeroDeCuenta").value=""
}
  
});