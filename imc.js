 function validar(){
     var edad,gen;
     edad= document.getElementById("edad").value;
     if(edad<=30){
       gen= document.getElementById("genero").value;
         if(gen == 'masculino'){
           calculaIMCuno();  
         }
         else{
           calculaIMCdos();
         }
     }
     else{   
          gen= document.getElementById("genero").value;
         if(gen == 'masculino'){
           calculaIMCtres();  
         }
         else{
            calculaIMCcuatro();
         }
     }  
 }
     
 function calculaIMCuno(){
var peso, altura, imc, leyenda;
 peso=document.getElementById("peso").value;
 altura=document.getElementById("altura").value/100;
 imc=peso/(altura*altura);
 alert("IMC "+imc);
if(imc>=4 && imc <=12){
leyenda="Delgado";
 }
     else if(imc>=12.1 && imc <=17){
leyenda="Bajo de peso";
} 
     else if(imc>=17.1 && imc <=22){
leyenda="Saludable";
} 
     else if(imc>=22.1 && imc <=27){
leyenda="Sobrepeso";
}     
     else if(imc>=27.1 && imc <=45){
leyenda="Obesidad";
}
alert(leyenda);     
 }
 
 
 function calculaIMCdos(){
var peso, altura, imc, leyenda;
 peso=document.getElementById("peso").value;
 altura=document.getElementById("altura").value/100;
 imc=peso/(altura*altura);
 alert("IMC "+imc);

     if(imc>=4 && imc <=18){
 leyenda="Delgado";
 }
     else if(imc>=18.1 && imc <=23){
leyenda="Bajo de peso";
}     
     else if(imc>=23.1 && imc <=28){
leyenda="Saludable";
}     
     else if(imc>=28.1 && imc <=33){
leyenda="Sobrepeso";
}
     else if(imc>=33.1 && imc <=45){
leyenda="Obesidad";
}
alert(leyenda);
}
    
 function calculaIMCtres(){
var peso, altura, imc, leyenda;
 peso=document.getElementById("peso").value;
 altura=document.getElementById("altura").value/100;
 imc=peso/(altura*altura);
 alert("IMC "+imc);

     if(imc>=4 && imc <=14){
 leyenda="Delgado";
 }
     else if(imc>=14.1 && imc <=19){
leyenda="Bajo de peso";
}     
     else if(imc>=19.1 && imc <=24){
leyenda="Saludable";
}     
     else if(imc>=24.1 && imc <=29){
leyenda="Sobrepeso";
}
     else if(imc>=29.1 && imc <=45){
leyenda="Obesidad";
}
alert(leyenda);
}

     function calculaIMCcuatro(){
var peso, altura, imc, leyenda;
 peso=document.getElementById("peso").value;
 altura=document.getElementById("altura").value/100;
 imc=peso/(altura*altura);
alert("IMC "+imc);

     if(imc>=4 && imc <=20){
 leyenda="Delgado";
 }
     else if(imc>=20.1 && imc <=25){
leyenda="Bajo de peso";
}     
     else if(imc>=25.1 && imc <=30){
leyenda="Saludable";
}     
     else if(imc>=30.1 && imc <=35){
leyenda="Sobrepeso";
}
     else if(imc>=35.1 && imc <=45){
leyenda="Obesidad";
}
alert(leyenda);
}