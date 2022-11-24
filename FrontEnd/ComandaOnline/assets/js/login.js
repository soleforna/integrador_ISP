const myForm = document.getElementById('formulario');
const urlPost = 'http://localhost:8000/api/auth/login/';

myForm.addEventListener('submit', function (e) {

    e.preventDefault();

    var name = document.querySelector("#inputUsername");
    var pass = document.querySelector("#inputPassword");

    //Verificacion de capmpo usuario vacio
    if (name.value == "") {

        error("Usuario: Este campo no puede estar en blanco.");

    } else { //POST a la API

        //Guardar usuario en el sessionstorage
        sessionStorage.setItem('user', name.value)

        fetch(urlPost, {
            headers: {
                'Accept': 'application/json, text/plain, */*',
                'Content-Type': 'application/json'
            },
            method: 'POST',
            body: JSON.stringify({
                username: name.value,
                password: pass.value
            })

        }).then(res => res.json()).then(data => {

            if (!data.key == '') {
                document.getElementById("formulario").reset();
                //Guardar token en el sessionstorage
                sessionStorage.setItem('token', data.key)
                //Redireccionar al dashboard
                window.location.href = "./dashboard.html"

            } else if (!data.password == '') {
                //Remover usuario del sessionstorage
                sessionStorage.removeItem('user');
                //Contraseña vacia
                error('Contraseña: ' + data.password);
            } else if (!data.non_field_errors == '') {
                //Remover usuario del sessionstorage
                sessionStorage.removeItem('user');
                //Usuario o contraseña incorrectos
                error("Error: Usuario o contraseña incorrectos");
            }
        }).catch(err => console.log(err)); //cualquier otro error
    }
});

//Funcion para mostrar errores
function error(text) {
    document.getElementById("error").style.backgroundColor = "indianred";
    document.getElementById("error").style.color = "white";
    document.getElementById("error").style.borderRadius = "30px";
    document.getElementById("error").style.marginTop = "10px";
    document.getElementById("error").style.textAlign = "center";
    document.getElementById("error").style.padding = "10px";
    document.getElementById("error").innerText = text;
}

function mostrar() {
    var pass = document.getElementById("inputPassword");
    if (pass.type == "password") {
        pass.type = "text";
    } else {
        pass.type = "password";
    }
}
