function inserirTextoPadrao() {
    document.getElementById("resultado").innerHTML = document.getElementById("texto_padrao").value

    document.getElementById("adicionarTextoButton").style.display = "inline"
}

function adicionarTexto() {
    let resultado = document.getElementById("resultado").innerHTML
    resultado = resultado + " " + document.getElementById("adicionar_texto").value

    document.getElementById("resultado").innerHTML = resultado
    document.getElementById("adicionarTextoButton").style.display = "none"
}

function removerTexto() {
    let resultado = document.getElementById("resultado").innerHTML
    let retirar = document.getElementById("remover_texto").value

    resultado = resultado.replace(retirar, "")

    document.getElementById("resultado").innerHTML = resultado
}