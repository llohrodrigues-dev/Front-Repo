const botaoBuscar = document.querySelector("#botao-buscar")
const mensagem = document.querySelector("#mensagem")
const publicacao = document.querySelector("#publicacao")
const tituloPublicacao = document.querySelector("#titulo-publicacao")
const textoPublicacao = document.querySelector("#texto-publicacao")

async function buscarPublicacao() {
    mensagem.textContent = "Buscando publicação..."
    publicacao.hidden = true
    botaoBuscar.disabled = true

    try {
        const resposta = await fetch("https://jsonplaceholder.typicode.com/posts/1")

        if (!resposta.ok) {
            throw new Error(`Erro HTTP: ${resposta.status}`)
        }

        const dados = await resposta.json()

        tituloPublicacao.textContent = dados.title
        textoPublicacao.textContent = dados.body
        publicacao.hidden = false
        mensagem.textContent = "Publicação carregada."
    } catch (erro) {
        console.error(erro)
        mensagem.textContent = "Não foi possível carregar a publicação."
    } finally {
        botaoBuscar.disabled = false
    }
}

botaoBuscar.addEventListener("click", buscarPublicacao)
