//Recuperar contraseña

  //logica

  //primer boton de verificacion
var eyeCode=document.getElementById("corrCode");
var code=document.getElementById("changeCode");
var newC=document.getElementById("newCo");
 newC.style.display="none";
 code.style.display="none";
 eyeCode.style.display="none";


document.getElementById("btn_correo")
.addEventListener("click",function() {
  

  let i=0;

  buscar(i);
  function buscar(i){
  
    if(baseDatos.length===i){
        console.log("dato incorrecto");
      }else{
                   if(baseDatos[i].nombre===document.getElementById("re_correo").value){
        console.log("dato existente")
        console.log(i);
        code.style.display="block"
        var u=i;

                 //cambio de codigo
  
  document.getElementById("btn_change")
  .addEventListener("click",function() {
    cambioCodigo();
  function cambioCodigo(){
      if(document.getElementById("contraseña").value===document.getElementById("contraseña1").value){
        baseDatos[u].codigo=document.getElementById("contraseña1").value;
        eyeCode.style.display="none";
        newC.style.display="block";

        document.createTextNode("Contraseña Cambiada");
      }else{
        eyeCode.style.display="block";

      }
   };
  })                 






      }else{
         i++;
      buscar(i);
      }
     
    }
  };
 
 

  
})


