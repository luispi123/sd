    function convertir() {
		var peso = eval(document.f1.peso.value);
        var mon= document.getElementById("mon").value;
		var result =0;
        var monedavar=0;
        if(mon == 'E'){
            monedavar=3250;
            result=peso/monedavar;
            alert("$ "+peso+ " pesos equivale a : "+result+" Euros");
        }else if(mon=='D'){
            monedavar=2850;
            result=peso/monedavar;
            alert("$ "+peso+ " pesos equivale a : "+result+" Dolares");
        }
	}