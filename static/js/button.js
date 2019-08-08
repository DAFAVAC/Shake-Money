
  //botones de ingreso al sistema
// variables por pantalla
var present=document.getElementById("000");
var inicio=document.getElementById("login");
var regitro=document.getElementById("registro");
var reContraseña =document.getElementById("newPas");
var sistema =document.getElementById("sis");
var textCort =document.getElementById("toCorrect");
textCort.style.display ="none";
//inicio del sistema
regitro.style.display="none"
reContraseña.style.display="none"
sistema.style.display="none"
inicio.style.display="none"
//presentacion a sistema
document.getElementById("re_inicio")
    .addEventListener("click",function(){
        inicio.style.display="block";
        reContraseña.style.display="none";
        sistema.style.display="none"
        present.style.display="none"
        regitro.style.display="none";
    })
//boton de registro
document.getElementById("button_registro")
.addEventListener("click", function() {
       inicio.style.display="none";
       reContraseña.style.display="none";
       sistema.style.display="none"
       regitro.style.display="block";
       present.style.display="none"
})

//boton de recupera conraseña
document.getElementById("newPas_re")
.addEventListener("click", function() {
       inicio.style.display="none";
       reContraseña.style.display="block";
       sistema.style.display="none"
       regitro.style.display="none";
       present.style.display="none"
})

document.getElementById("backIndex")
.addEventListener("click", function() {
       inicio.style.display="block";
       reContraseña.style.display="none";
       sistema.style.display="none"
       regitro.style.display="none";
       present.style.display="none"
})

  document.getElementById("re_backIndex")
      .addEventListener("click", function() {
          inicio.style.display="block";
          reContraseña.style.display="none";
          sistema.style.display="none"
          regitro.style.display="none";
          present.style.display="none"
      })




var textCort =document.getElementById("toCorrect");
textCort.style.display ="none";

document.getElementById("grabar")
    .addEventListener("click",function(){
        
        var start=baseDatos.find(function(dato){
            if (dato.correo===document.getElementById("in_nombre").value && dato.codigo===document.getElementById("in_contraseña").value) {
                inicio.style.display="none";
                reContraseña.style.display="none";
                sistema.style.display="block";
                regitro.style.display="none";
                present.style.display="none"
            }
            return dato.correo===document.getElementById("in_nombre").value && dato.codigo===document.getElementById("in_contraseña").value;
        })
        console.log(start);
        if(start==="undefined"){
                inicio.style.display="block";
                textCort.style.display ="block";
                reContraseña.style.display="none";
                sistema.style.display="none";
                regitro.style.display="none";
                present.style.display="none"
        }
    })





  //botones del sistema
    var divpa=document.getElementById("pagos")
    divpa.style.display="none"
    var divpa1=document.getElementById("pagos1")
    divpa1.style.display="none"
    var divtra=document.getElementById("transa")
    divtra.style.display="none"
    var divca=document.getElementById("carru")
    document.getElementById("servicios").addEventListener("click",function () {

    divpa1.style.display="block"   
    divpa.style.display="block"
    divtra.style.display="none"
    divca.style.display="none"
    present.style.display="none"
})

    document.getElementById("trans").addEventListener("click",function () {
        divpa1.style.display="none"   
    divpa.style.display="none"
        
        divtra.style.display="block"
        divca.style.display="none"
        present.style.display="none"
    })

