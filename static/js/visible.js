// con esto solo veremos el registro
var elRegistro=document.getElementById("registro");
var elInicio=document.getElementById("inisioSesion");

elInicio.style.display = "none";


//lógica para crear nuevos usuarios en el sistema
document.getElementById("btnRegistro")
    .addEventListener("click",function() {
        //recuperar datos ingresados
        var nombre = document.getElementById("NombreRegistro").value;
        var apellido = document.getElementById("ApellidoRegistro").value;
        var correo = document.getElementById("CorreoRegistro").value;
        var celular = document.getElementById("CelularRegistro").value;
        var codigo = document.getElementById("UnicoRegistro").value;
        var pichincha = document.getElementById("bPichincha").value;
        var bolivariano = document.getElementById("bPacifico").value;
        var guayaquil = document.getElementById("bGuayaquil").value;
        //var saldop = document.getElementById("CelularRegistro").value;
        //var saldob = document.getElementById("CelularRegistro").value;
        //var saldog = document.getElementById("CelularRegistro").value;
        //guardar en array
        var nuevoUsuario = new Usuario(nombre,apellido,correo,celular,codigo,pichincha,bolivariano,guayaquil);
        baseDatos.push(nuevoUsuario);
        elRegistro.style.display = "none";
        elInicio.style.display = "block";
    });

    


//recuperar datos ingresados en la web
document.getElementById("btnIniciar")
.addEventListener("click",function () {
    var usuario = document.getElementById("UsuarioI").value;
    var clave = document.getElementById("UnicoI").value; 
    
    console.log("usuario: " + usuario);
    console.log("clave: " + clave);

    var usuario = baseDatos.find(
        data => 
            data.nombre === usuario
            && data.clave === clave
    );

    if(typeof usuario === "undefined")
        alert("Usuario o clave no válidas");
    else
    alert("perro")
        alert("Bienvenido " + usuario.nombre + " " + " al sistema"  + usuario.pichinchas);
        window.location="hola.html"
        
});