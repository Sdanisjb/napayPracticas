var operando1;
var operando2;
var operacion;


function init(){
	//Variables
	var resultado = document.getElementById("resultado");
	var reset = document.getElementById("reset");
	var suma = document.getElementById("sum");
	var resta = document.getElementById("res");
	var multi = document.getElementById("mul");
	var div = document.getElementById("div");
	var igual = document.getElementById("igual");
	var uno = document.getElementById("1");
	var dos = document.getElementById("2");
	var tres = document.getElementById("3");
	var cuatro = document.getElementById("4");
	var cinco = document.getElementById("5");
	var seis = document.getElementById("6");
	var siete = document.getElementById("7");
	var ocho = document.getElementById("8");
	var nueve = document.getElementById("9");
	var cero = document.getElementById("0");

	//Eventos
	uno.onclick = function(e){
		resultado.textContent = resultado.textContent + "1";
	}

	dos.onclick = function(e){
		resultado.textContent = resultado.textContent + "2";
	}

	tres.onclick = function(e){
		resultado.textContent = resultado.textContent + "3";
	}
	cuatro.onclick = function(e){
		resultado.textContent = resultado.textContent + "4";
	}
	cinco.onclick = function(e){
		resultado.textContent = resultado.textContent + "5";
	}
	seis.onclick = function(e){
		resultado.textContent = resultado.textContent + "6";
	}
	siete.onclick = function(e){
		resultado.textContent = resultado.textContent + "7";
	}
	ocho.onclick = function(e){
		resultado.textContent = resultado.textContent + "8";
	}
	nueve.onclick = function(e){
		resultado.textContent = resultado.textContent + "9";
	}
	cero.onclick = function(e){
		resultado.textContent = resultado.textContent + "0";
	}

	reset.onclick = function(e){
		resetear();
	}

	suma.onclick = function(e){
		operando1 = resultado.textContent;
		operacion = "+";
		limpiar();
	}

	resta.onclick = function(e){
		operando1 = resultado.textContent;
		operacion = "-";
		limpiar();
	}
	multi.onclick = function(e){
		operando1 = resultado.textContent;
		operacion = "*";
		limpiar();
	}
	div.onclick = function(e){
		operando1 = resultado.textContent;
		operacion = "/";
		limpiar();
	}
	igual.onclick = function(e){
		operando2 = resultado.textContent;
		resolver();
	}
}

function limpiar(){
	resultado.textContent= "";
}

function resetear(){
	resultado.textContent = "";
	operando1 = 0;
	operando2 = 0;
	operacion = "";
}


function resolver(){
	var res = 0;
	switch(operacion){
		case "+":
			res = parseFloat(operando1) + parseFloat(operando2);
			break;
		case "-":
			res = parseFloat(operando1) - parseFloat(operando2);
			break;
		case "*":
			res = parseFloat(operando1) * parseFloat(operando2);
			break;
		case "/":
			res = parseFloat(operando1) / parseFloat(operando2);
			break;
	}
	resetear();
	resultado.textContent = res;
}





