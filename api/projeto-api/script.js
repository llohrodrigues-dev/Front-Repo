const formularioBusca = document.querySelector("#formulario-busca")
const campoBusca = document.querySelector("#termo-busca")
const botaoBuscar = formularioBusca.querySelector("button")
const erroBusca = document.querySelector("#erro-busca")
const mensagemEstado = document.querySelector("#mensagem-estado")
const areaResultados = document.querySelector("#area-resultados")
const listaLivros = document.querySelector("#lista-livros")

function limparErro() {
    erroBusca.textContent = ""
    campoBusca.classList.remove("campo-invalido")
    campoBusca.removeAttribute("aria-invalid")
}

function validarTermo(termo) {
    limparErro()

    if (termo.length < 2) {
        erroBusca.textContent = "Digite pelo menos dois caracteres para buscar."
        campoBusca.classList.add("campo-invalido")
        campoBusca.setAttribute("aria-invalid", "true")
        campoBusca.focus()
        return false
    }

    return true
}

function criarCartao(livro) {
    const item = document.createElement("li")
    const titulo = document.createElement("h3")
    const autor = document.createElement("p")
    const ano = document.createElement("p")
    const link = document.createElement("a")

    const autores = livro.author_name
        ? livro.author_name.join(", ")
        : "Autor não informado"

    const anoPublicacao = livro.first_publish_year
        ? livro.first_publish_year
        : "Ano não informado"

    item.classList.add("cartao-livro")
    titulo.textContent = livro.title
    autor.textContent = `Autoria: ${autores}`
    ano.textContent = `Primeira publicação: ${anoPublicacao}`

    link.classList.add("link-livro")
    link.href = `https://openlibrary.org${livro.key}`
    link.target = "_blank"
    link.rel = "noopener noreferrer"
    link.textContent = "Ver detalhes na Open Library"
    link.setAttribute("aria-label", `Ver detalhes de ${livro.title} na Open Library`)

    item.appendChild(titulo)
    item.appendChild(autor)
    item.appendChild(ano)
    item.appendChild(link)

    return item
}

function mostrarLivros(livros) {
    listaLivros.textContent = ""

    for (const livro of livros) {
        const cartao = criarCartao(livro)
        listaLivros.appendChild(cartao)
    }
}

async function buscarLivros(evento) {
    evento.preventDefault()

    const termo = campoBusca.value.trim()

    if (!validarTermo(termo)) {
        return
    }

    const termoCodificado = encodeURIComponent(termo)
    const campos = "key,title,author_name,first_publish_year"
    const endereco = `https://openlibrary.org/search.json?title=${termoCodificado}&fields=${campos}&limit=12&lang=pt`

    mensagemEstado.textContent = "Buscando livros..."
    areaResultados.hidden = true
    listaLivros.textContent = ""
    listaLivros.setAttribute("aria-busy", "true")
    botaoBuscar.disabled = true

    try {
        const resposta = await fetch(endereco)

        if (!resposta.ok) {
            throw new Error(`Erro HTTP: ${resposta.status}`)
        }

        const dados = await resposta.json()
        const livros = dados.docs

        if (livros.length === 0) {
            mensagemEstado.textContent = `Nenhum livro foi encontrado para “${termo}”.`
            return
        }

        mostrarLivros(livros)
        areaResultados.hidden = false
        mensagemEstado.textContent = `${livros.length} livros encontrados para “${termo}”.`
    } catch (erro) {
        console.error(erro)
        mensagemEstado.textContent = "Não foi possível buscar os livros. Tente novamente mais tarde."
    } finally {
        listaLivros.setAttribute("aria-busy", "false")
        botaoBuscar.disabled = false
    }
}

formularioBusca.addEventListener("submit", buscarLivros)
