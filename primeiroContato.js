function olaMundo() {
    //alert("ola mundo 2")
}

function trocarNomeBotao() {
    var botao1 = document.getElementById("botao1")

    botao1.innerHTML = "Troquei o nome do botão"
    botao1.style.display = "none"

    document.getElementById("teste").style.color = "red"
    document.getElementsByTagName("button")[1].innerHTML = "Troquei esse também"
}

function testandoInput() {
    document.getElementById("nome").value = ""
}

function testandoInput2() {
    alert(document.getElementById("nome").value)
}

function executeAction() {
    let elemento = document.getElementById("elemento").value
    alert(elemento)
    document.getElementById(elemento).innerHTML = "teste"
}