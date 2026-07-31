const formulario = document.querySelector("#formulario-contato")
const campoNome = document.querySelector("#nome")
const campoEmail = document.querySelector("#email")
const erroNome = document.querySelector("#erro-nome")
const erroEmail = document.querySelector("#erro-email")
const mensagemSucesso = document.querySelector("#mensagem-sucesso")

function limparMensagens() {
    erroNome.textContent = ""
    erroEmail.textContent = ""
    mensagemSucesso.textContent = ""
}

formulario.addEventListener("submit", function (evento) {
    evento.preventDefault()
    limparMensagens()

    let formularioValido = true

    if (campoNome.value.trim() === "") {
        erroNome.textContent = "Informe o nome."
        formularioValido = false
    }

    if (campoEmail.value.trim() === "" || !campoEmail.validity.valid) {
        erroEmail.textContent = "Informe um e-mail válido."
        formularioValido = false
    }

    if (formularioValido) {
        mensagemSucesso.textContent = "Cadastro enviado com sucesso."
        formulario.reset()
    }
})
