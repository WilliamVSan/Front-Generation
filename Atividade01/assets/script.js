function clique () {
    alert("Você clicou no botão")
}

let nome = window.document.getElementById('nome')
let email = document.getElementById('id')
let assunto = document.getElementById('assunto')

function enviar() {
    if(nome.value == "" || email.value == ""|| assunto.value == ""){
        alert("todos os campos devem ser preenchidos devidamente.")
        return false
    }
    else{
        alert(nome.value + " seus dados foram preenchidos devidamente e enviados.")
        return true
    }
}