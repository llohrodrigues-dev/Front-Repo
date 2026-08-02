const botaoBuscar = document.querySelector("#botao-buscar")
const mensagem = document.querySelector("#mensagem")
const resultado = document.querySelector("#resultado")
const nome = document.querySelector("#nome")
const email = document.querySelector("#email")

botaoBuscar.addEventListener("click", function () {
    mensagem.textContent = "Buscando os dados..."
    resultado.hidden = true

    fetch("https://jsonplaceholder.typicode.com/users/1")
        .then(function (resposta) {
            return resposta.json()
        })
        .then(function (usuario) {
            nome.textContent = usuario.name
            email.textContent = usuario.email
            resultado.hidden = false
            mensagem.textContent = "Dados carregados."
        })
})
