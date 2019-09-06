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

	var pesoValido = true;
	var alturaValida = true;

	if(peso <= 0 || peso >= 1000){

		console.log("Peso inválido");
		tdIMC.textContent = "Peso inválido";
		pesoValido = false;
		pacientes.classList.add("paciente-invalido");

	}

	if(altura <= 0 || altura >= 3){

		console.log("Altura inválida");
		tdIMC.textContent = "Altura invalida";
		alturaValida = false;
		pacientes.classList.add("paciente-invalido");

	}

	if(pesoValido && alturaValida){

		var imc = peso / (altura * altura);
		tdIMC.textContent = imc.toFixed(2);

	}

}