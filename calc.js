            var resultado = "";
            function calcular(){
                var numero = parseInt(document.getElementById("numero").value);
                bin(numero);
                alert("Binario:"+resultado);
                resultado = "";
                oct(numero);
                alert("Octal:"+resultado);
                resultado = "";
                hex(numero);
                alert("Hexadecimal:"+resultado);
            }
            
            function bin(num){
                mod = num % 2;
                if(parseInt(num) == 0){
                    return resultado;
                }
                resultado = mod + resultado;
                bin(parseInt(num/2));
            }
            
            function oct(num){
                mod = num % 8;
                if(parseInt(num) == 0){
                    return resultado;
                }
                resultado = mod + resultado;
                oct(parseInt(num/8));
            }
            function hex(num){
                mod = num % 16;
                if(parseInt(num) == 0){
                    return resultado;
                }
                if(mod == 10){
                    mod = "A";
                }
                else if(mod == 11){
                    mod = "B";
                }
                else if(mod == 12){
                    mod = "C";
                }
                else if(mod == 13){
                    mod = "D";
                }
                else if(mod == 14){
                    mod = "E";
                }
                else if(mod == 15){
                    mod = "F";
                }
                resultado = mod + resultado;
                hex(parseInt(num/16));
            }