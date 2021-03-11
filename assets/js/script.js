let email = document.querySelector("#email")
let nome = document.querySelector("#nome")
let assunto = document.querySelector("#assunto")
let mapa = document.querySelector("#mapa")

nome.style.width = "100%"
email.style.width = "100%"

let nomeValido = false
let emailValido = false
let assuntoValido = false

function validaNome(){
    let txtNome = document.querySelector("#txtNome")
    if(nome.value.length < 3){
        txtNome.innerHTML = "Nome Inválido"
        txtNome.style.color = "red"
        txtNome.style.display = "block"
        nomeValido = false
    }else{
        txtNome.style.display = "none"
        nomeValido = true
    }
}

function validaEmail(){
    let txtEmail = document.querySelector("#txtEmail")
    if(email.value.indexOf("@") == -1 || email.value.indexOf(".") == -1){
        txtEmail.innerHTML = "Email Inválido"
        txtEmail.style.color = "red"
        txtEmail.style.display = "block"
        emailValido = false
    }else{
        txtEmail.style.display = "none"
        emailValido = true
    }
}

function validaAssunto(){
    let txtAssunto = document.querySelector("#txtAssunto")
    if(assunto.value.length > 100){
        txtAssunto.innerHTML = "Assunto Inválido. Máximo de caracteres: 100"
        txtAssunto.style.color = "red"
        txtAssunto.style.display = "block"
        assuntoValido = false
    }else{
        txtAssunto.style.display = "none"
        assuntoValido = true
    }
}

function enviar(){
    if(nomeValido && emailValido && assuntoValido){
        alert("Formulário enviado com sucesso!")
    }else{
        alert("Preencha corretamente os campos.")
    }
}

function zoomIn(){
    mapa.style.width = "600px"
    mapa.style.height = "400px"
}

function zoomOut(){
    mapa.style.width = "400px"
    mapa.style.height = "300px"
}