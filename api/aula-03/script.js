const botaoCarregar = document.querySelector("#botao-carregar")
const mensagem = document.querySelector("#mensagem")
const resultado = document.querySelector("#resultado")
const dadosUsuario = document.querySelector("#dados-usuario")

botaoCarregar.addEventListener("click", function () {
    mensagem.textContent = "Requisição em andamento..."
    resultado.hidden = true
    botaoCarregar.disabled = true

    fetch("https://jsonplaceholder.typicode.com/users/2")
        .then(function (resposta) {
            return resposta.json()
        })
        .then(function (usuario) {
            dadosUsuario.textContent = `${usuario.name} mora em ${usuario.address.city}.`
            resultado.hidden = false
            mensagem.textContent = "A Promise foi concluída com sucesso."
        })
        .catch(function () {
            mensagem.textContent = "Não foi possível concluir a requisição."
        })
        .finally(function () {
            botaoCarregar.disabled = false
        })
})
