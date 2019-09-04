var titulo = document.querySelector(".titulo");
titulo.textContent = "Aparecida Nutricionista";

var paciente = document.querySelector("#primeiro-paciente");
var tdPeso = paciente.querySelector(".info-peso");
var tdAltura = paciente.querySelector(".info-altura");
var tdIMC = paciente.querySelector(".info-imc");

var peso = tdPeso.textContent;
var altura = tdAltura.textContent;

var pesoValido = true;
var alturaValida = true;

/*console.log(peso);
console.log(altura);*/

if(peso <= 0 || peso >= 1000){

	console.log("Peso inválido");
	tdIMC.textContent = "Peso inválido";
	pesoValido = false;

}

if(altura <= 0 || altura >= 3){

	console.log("Altura inválida");
	tdIMC.textContent = "Altura invalida";
	alturaValida = false;

}

if(pesoValido && alturaValida){

	var imc = peso / (altura * altura);
	tdIMC.textContent = imc;

}