const formularioBusca = document.querySelector("#formulario-busca")
const campoUsuario = document.querySelector("#usuario")
const botaoBuscar = formularioBusca.querySelector("button")
const mensagem = document.querySelector("#mensagem")
const listaPublicacoes = document.querySelector("#lista-publicacoes")

function mostrarPublicacoes(publicacoes) {
    listaPublicacoes.textContent = ""

    for (const publicacao of publicacoes) {
        const item = document.createElement("li")
        item.textContent = publicacao.title
        listaPublicacoes.appendChild(item)
    }
}

async function buscarPublicacoes(evento) {
    evento.preventDefault()

    const usuario = campoUsuario.value

    mensagem.textContent = "Buscando publicações..."
    listaPublicacoes.textContent = ""
    listaPublicacoes.setAttribute("aria-busy", "true")
    botaoBuscar.disabled = true

    try {
        const endereco = `https://jsonplaceholder.typicode.com/posts?userId=${usuario}`
        const resposta = await fetch(endereco)

        if (!resposta.ok) {
            throw new Error(`Erro HTTP: ${resposta.status}`)
        }

        const publicacoes = await resposta.json()

        if (publicacoes.length === 0) {
            mensagem.textContent = "Nenhuma publicação foi encontrada para esse usuário."
            return
        }

        mostrarPublicacoes(publicacoes)
        mensagem.textContent = `${publicacoes.length} publicações encontradas.`
    } catch (erro) {
        console.error(erro)
        mensagem.textContent = "Não foi possível realizar a busca."
    } finally {
        listaPublicacoes.setAttribute("aria-busy", "false")
        botaoBuscar.disabled = false
    }
}

formularioBusca.addEventListener("submit", buscarPublicacoes)
