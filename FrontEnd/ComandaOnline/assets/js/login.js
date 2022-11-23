const myForm = document.getElementById('formulario');
const urlPost = 'http://localhost:8000/api/auth/login/';

myForm.addEventListener('submit', function (e) {
    e.preventDefault();

    var name = document.querySelector("#inputUsername");
    var pass = document.querySelector("#inputPassword");


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

            console.log(data)
            
            if (!data.key == null) {
                $("#formulario>").empty() //empty
                console.log(data.key)
                let token = data.key
                localStorage.setItem('token', token)
                //window.location.href = "./dashboard.html"
            } else if(!data.password == ''){
                error('Contraseña: ' + data.password);
            }
        })
        .catch(err => console.log(err));
});


function error(text) {
    console.log("estoy en error con " + text)
    document.getElementById("error").style.backgroundColor = "indianred";
    document.getElementById("error").style.color = "white";
    document.getElementById("error").style.borderRadius = "10px";
    document.getElementById("error").style.marginTop = "10px";
    document.getElementById("error").style.textAlign = "center";
    document.getElementById("error").innerText = text;
}
