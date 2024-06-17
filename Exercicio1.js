function imprimirUsuario() {
    let resposta = "";

    resposta = "Nome: " + document.getElementById("nome").value + ", "
    resposta = resposta + "Telefone: " + document.getElementById("telefone").value + ", "
    resposta = resposta + "Email: " + document.getElementById("email").value

    alert(resposta)
}

function limparFormulario() {
    document.getElementById("nome").value = ""
    document.getElementById("telefone").value = ""
    document.getElementById("email").value = ""
}

function formatarTexto() {
    let textoFormatado = document.getElementById("nome").value.toUpperCase()
    document.getElementById("nome").value = textoFormatado
}