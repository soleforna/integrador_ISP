const formulario = document.getElementById('formulario');
const inputs = document.querySelectorAll('#formulario input');

const expresiones = {
	usuario: /^[a-zA-Z0-9\_\-]{4,16}$/, // Letras, numeros, guion y guion_bajo
	nombre: /^[a-zA-ZÀ-ÿ\s]{1,40}$/, // Letras y espacios, pueden llevar acentos.
	apellido: /^[a-zA-ZÀ-ÿ\s]{1,40}$/, // Letras y espacios, pueden llevar acentos.
	password: /^(?=(?:.*\d){2})(?=(?:.*[A-Z]){1})(?=(?:.*[a-z]){1})\S{8}$/, //solo 8 Caracteres, Mayusculas, Minusculas, Numeros sin espacios en blanco sin repetir el mismo caracter mas de 4 veces.
	correo: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
	telefono: /^(?:(?:00)?549?)?0?(?:11|[2368]\d)(?:(?=\d{0,2}15)\d{2})??\d{8}$/,
	direccion: /^[a-zA-ZÀ-ÿ\s]+[Z0-9-s/n]{1,40}$/ // // Letras y espacios, pueden llevar acentos.
}

const campos = {
	nombre: false,
	apellido: false,
	usuario: false,
	password: false,
	correo: false,
	telefono: false,
	direccion: false
}

const validarFormulario = (e) => {
	switch (e.target.name) {
		case "nombre":
			validarCampo(expresiones.nombre, e.target, 'nombre');
			break;
		case "apellido":
			validarCampo(expresiones.nombre, e.target, 'apellido');
			break;
		case "usuario":
			validarCampo(expresiones.usuario, e.target, 'usuario');
			break;
		case "password":
			validarCampo(expresiones.password, e.target, 'password');
			validarPassword2();
			break;
		case "password2":
			validarPassword2();
			break;
		case "correo":
			validarCampo(expresiones.correo, e.target, 'correo');
			break;
		case "telefono":
			validarCampo(expresiones.telefono, e.target, 'telefono');
			break;
		case "direccion":
			validarCampo(expresiones.direccion, e.target, 'direccion');
			break;
	}
}

const validarCampo = (expresion, input, campo) => {
	if (expresion.test(input.value)) {
		document.getElementById(`grupo__${campo}`).classList.remove('formulario__grupo-incorrecto');
		document.getElementById(`grupo__${campo}`).classList.add('formulario__grupo-correcto');
		document.querySelector(`#grupo__${campo} i`).classList.add('fa-check-circle');
		document.querySelector(`#grupo__${campo} i`).classList.remove('fa-times-circle');
		document.querySelector(`#grupo__${campo} .formulario__input-error`).classList.remove('formulario__input-error-activo');
		campos[campo] = true;
	} else {
		document.getElementById(`grupo__${campo}`).classList.add('formulario__grupo-incorrecto');
		document.getElementById(`grupo__${campo}`).classList.remove('formulario__grupo-correcto');
		document.querySelector(`#grupo__${campo} i`).classList.add('fa-times-circle');
		document.querySelector(`#grupo__${campo} i`).classList.remove('fa-check-circle');
		document.querySelector(`#grupo__${campo} .formulario__input-error`).classList.add('formulario__input-error-activo');
		campos[campo] = false;
	}
}

const validarPassword2 = () => {
	const inputPassword1 = document.getElementById('password');
	const inputPassword2 = document.getElementById('password2');

	if (inputPassword1.value !== inputPassword2.value) {
		document.getElementById(`grupo__password2`).classList.add('formulario__grupo-incorrecto');
		document.getElementById(`grupo__password2`).classList.remove('formulario__grupo-correcto');
		document.querySelector(`#grupo__password2 i`).classList.add('fa-times-circle');
		document.querySelector(`#grupo__password2 i`).classList.remove('fa-check-circle');
		document.querySelector(`#grupo__password2 .formulario__input-error`).classList.add('formulario__input-error-activo');
		campos['password'] = false;
	} else {
		document.getElementById(`grupo__password2`).classList.remove('formulario__grupo-incorrecto');
		document.getElementById(`grupo__password2`).classList.add('formulario__grupo-correcto');
		document.querySelector(`#grupo__password2 i`).classList.remove('fa-times-circle');
		document.querySelector(`#grupo__password2 i`).classList.add('fa-check-circle');
		document.querySelector(`#grupo__password2 .formulario__input-error`).classList.remove('formulario__input-error-activo');
		campos['password'] = true;
	}
}

inputs.forEach((input) => {
	input.addEventListener('keyup', validarFormulario);
	input.addEventListener('blur', validarFormulario);
});

formulario.addEventListener('submit', (e) => {
	e.preventDefault();

	const terminos = document.getElementById('terminos');
	if (campos.nombre && campos.apellido, campos.usuario && campos.password && campos.correo && campos.telefono && campos.direccion && terminos.checked) {
		formulario.reset();
		document.getElementById('formulario__mensaje-exito').classList.add('formulario__mensaje-exito-activo');
		document.getElementById('formulario__mensaje').classList.remove('formulario__mensaje-activo');
		setTimeout(() => {
			document.getElementById('formulario__mensaje-exito').classList.remove('formulario__mensaje-exito-activo');
		}, 5000);

		document.querySelectorAll('.formulario__grupo-correcto').forEach((icono) => {
			icono.classList.remove('formulario__grupo-correcto');
		});
	} else {
		document.getElementById('formulario__mensaje').classList.add('formulario__mensaje-activo');
	}
});

function mostrarreg() {
	var tipo = document.getElementById('password');
	var icon = document.getElementById('ov');

	if (tipo.type == 'password') {
		document.getElementById('password').setAttribute('type', 'text');
		icon.classList.toggle('fa-eye-slash');

	} else {
		document.getElementById('password').setAttribute('type', 'password');
		icon.classList.remove('fa-eye-slash');

	}

}

function mostrarreg2() {
	var tipo = document.getElementById('password2');
	var icon2 = document.getElementById('ov2');
	if (tipo.type == 'password') {
		document.getElementById('password2').setAttribute('type', 'text');
		icon2.classList.toggle('fa-eye-slash');
	} else {
		document.getElementById('password2').setAttribute('type', 'password');
		icon2.classList.toggle('fa-eye-slash');

	}

}
