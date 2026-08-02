const formularioBusca = document.querySelector("#formulario-busca")
const campoIdentificador = document.querySelector("#identificador")
const mensagem = document.querySelector("#mensagem")
const resultado = document.querySelector("#resultado")
const dadosUsuario = document.querySelector("#dados-usuario")

formularioBusca.addEventListener("submit", function (evento) {
    evento.preventDefault()

    const identificador = campoIdentificador.value

    mensagem.textContent = "Buscando usuário..."
    resultado.hidden = true

    fetch(`https://jsonplaceholder.typicode.com/users/${identificador}`)
        .then(function (resposta) {
            if (!resposta.ok) {
                throw new Error(`Erro HTTP: ${resposta.status}`)
            }

            return resposta.json()
        })
        .then(function (usuario) {
            dadosUsuario.textContent = `${usuario.name} utiliza o nome de usuário ${usuario.username}.`
            resultado.hidden = false
            mensagem.textContent = "Busca concluída."
        })
        .catch(function (erro) {
            console.error(erro)
            mensagem.textContent = "Usuário não encontrado ou serviço indisponível."
        })
})
