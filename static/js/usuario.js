function Usuario(nombre,apellido,correo,celular,codigo,pichincha,bolivariano,guyaquil,saldop,saldob,saldog){
    this.nombre=nombre;
    this.apellido=apellido;
    this.correo=correo;
    this.celular=celular;
    this.codigo=codigo;
    this.pichincha=pichincha;
    this.bolivariano=bolivariano;
    this.guyaquil=guyaquil;
   // this.saldop=saldop;
    //this.saldob=saldob;
    //this.saldog=saldog
}
var baseDatos=[];
var usuaario1= new Usuario("helton","quezada","loquesea","0988348115","123456789","2315455","445545545","655789952525","5561","1561","151");
baseDatos.push(usuaario1);
var cosa = document.getElementById("contenedor");
cosa.style.display= "none";