var titulo = document.querySelector(".titulo");
titulo.textContent = "Aparecida Nutricionista";

var paciente = document.querySelectorAll(".paciente");

for(var i = 0; i < paciente.length; i++){

	var pacientes = paciente[i];
	console.log(pacientes);

	var tdPeso = pacientes.querySelector(".info-peso");
	var tdAltura = pacientes.querySelector(".info-altura");
	var tdIMC = pacientes.querySelector(".info-imc");

	var peso = tdPeso.textContent;
	var altura = tdAltura.textContent;

	var pesoValido = validaPeso(peso);
	var alturaValida = validaAltura(altura);

	if(!pesoValido){

		console.log("Peso inválido");
		tdIMC.textContent = "Peso inválido";
		pesoValido = false;
		pacientes.classList.add("paciente-invalido");

	}

	if(!alturaValida){

		console.log("Altura inválida");
		tdIMC.textContent = "Altura invalida";
		alturaValida = false;
		pacientes.classList.add("paciente-invalido");

	}

	if (pesoValido && alturaValida) {
        var imc = calculaImc(peso, altura);
        tdIMC.textContent = imc;
    }

}

function calculaImc(peso, altura){

	var imc = 0;
	imc = peso / (altura * altura);
	return imc.toFixed(2);

}

function validaPeso(peso){

	if(peso > 0 && peso < 1000){

		return true;

	}else{

		return false;

	}

}

function validaAltura(altura){

	if(altura > 0 && altura <= 3.0){

		return true;

	}else{

		return false;

	}	

}

