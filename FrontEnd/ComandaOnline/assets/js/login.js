const myForm = document.getElementById('formulario');
const urlPost = 'http://localhost:8000/api/auth/login/';

myForm.addEventListener('submit', function (e){
    e.preventDefault();
    
    var name = document.querySelector("#inputUsername");
    var pass = document.querySelector("#inputPassword");

    
    fetch(urlPost,{
        headers: {
            'Accept': 'application/json, text/plain, */*',
            'Content-Type': 'application/json'
        },
        method: 'POST',

        body: JSON.stringify({username: name.value, password: pass.value})
        }).then(res => res.json()).then(data => {
            
            if(!data.key == ''){
                error(data);
                $("#formulario>").empty() //empty
                console.log(data)
        }else{
            console.log(data.key)
        }
        })
    .catch(err => console.log(err));
});


function error(data){
    document.getElementById("error").style.backgroundColor = "indianred";
    document.getElementById("error").style.borderRadius = "15px";
    document.getElementById("error").style.textAlign = "center";
    document.getElementById("error").innerText = data
}
