$(document).ready(function () {
	$('#miFormulario').submit(function (e) {
	e.preventDefault();
	
	$('.error').text('');
	$('input, select,textarea').removeClass('error-input');
	
	let esValido = true;
	
	//validacion
	// if (!validarCampo('#texto')) esValido = false;
	// if (!validarCampo('#password')) esValido = false;
	// if (!validarCampo('#dni')) esValido = false;
	// if (!validarCampo('#telefono')) esValido = false;
	// if (!validarCampo('#email')) esValido = false;
	// if (!validarCampo('#fecha')) esValido = false;
	// if (!validarCampo('#url')) esValido = false;
	// if (!validarCampo('#archivo')) esValido = false;
	// if (!validarCampo('#ciudad')) esValido = false;
	// if (!validarCampo('#mensaje')) esValido = false;
	// if (!validarCheckbox('#terminos')) esValido = false;
	// if (!validarRadio('genero')) esValido = false;
	
	// const campos = ['texto','password','dni','telefono','email','fecha','url','archivo','terminos','genero','ciudad','mensaje']
	
	// for (const selector of campos) {
	// let identificador = selector=='genero' ? selector :`#${selector}`;
	// if(selector == 'genero'){
	// if (!validarRadio(identificador)) esValido = false;
	// }else if( selector == 'terminos'){
	// if (!validarCheckbox(identificador)) esValido = false;
	// }else{
	// if (!validarCampo(identificador)) esValido = false;
	// }
	// }
	
	const campos = ['texto','password','dni','telefono','email','fecha','url','archivo','ciudad','mensaje'];
	for (const selector of campos) {
	let identificador = `#${selector}`;
	if (!validarCampo(identificador)) esValido = false;
	}
	
	if (!validarCheckbox('#terminos')) esValido = false;
	if (!validarRadio('genero')) esValido = false;
	});
	
	function validarCampo(selector){
	const campo = $(selector);
	const errorSpan = $(`${selector}Error`);
	let valid = true;
	
	if (selector == '#dni') {
	const dniRegex = /^\d{8}$/;
	valid = dniRegex.test(campo.val());
	if(!valid){
	campo.addClass('error-input');
	errorSpan.text('El dni debe contener 8 digitos');
	}
	}
	
	if ( campo.val() < 1) {
	campo.addClass('error-input');
	errorSpan.text('campo no puede estar vacio');
	valid = false;
	}
	
	
	
	if (selector == '#email') {
	const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
	valid = emailRegex.test(campo.val());
	if(!valid){
	campo.addClass('error-input');
	errorSpan.text('No es un correo valido');
	}
	}
	
	return valid;
	}
	
	function validarCheckbox(selector){
	const campo = $(selector);
	const errorSpan = $(`${selector}Error`);
	
	if(!campo.is(':checked')){
	campo.addClass('error-input');
	errorSpan.text('campo no puede estar vacio');
	return false;
	}
	
	return true;
	}
	
	function validarRadio(name){
	const campo = $(`input[name=${name}]`);
	const errorSpan = $(`#${name}Error`);
	
	if(!campo.is(':checked')){
	campo.addClass('error-input');
	errorSpan.text('Debe seleccionar una opcion');
	return false;
	}
	return true;
	}
	})