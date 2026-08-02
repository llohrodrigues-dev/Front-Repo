const botaoCarregar = document.querySelector("#botao-carregar")
const mensagem = document.querySelector("#mensagem")
const listaUsuarios = document.querySelector("#lista-usuarios")

function criarCartao(usuario) {
    const item = document.createElement("li")
    const nome = document.createElement("h3")
    const email = document.createElement("p")
    const cidade = document.createElement("p")

    item.classList.add("cartao")
    nome.textContent = usuario.name
    email.textContent = `E-mail: ${usuario.email}`
    cidade.textContent = `Cidade: ${usuario.address.city}`

    item.appendChild(nome)
    item.appendChild(email)
    item.appendChild(cidade)

    return item
}

async function carregarUsuarios() {
    mensagem.textContent = "Carregando usuários..."
    listaUsuarios.textContent = ""
    listaUsuarios.setAttribute("aria-busy", "true")
    botaoCarregar.disabled = true

    try {
        const resposta = await fetch("https://jsonplaceholder.typicode.com/users")

        if (!resposta.ok) {
            throw new Error(`Erro HTTP: ${resposta.status}`)
        }

        const usuarios = await resposta.json()

        if (usuarios.length === 0) {
            mensagem.textContent = "Nenhum usuário foi encontrado."
            return
        }

        for (const usuario of usuarios) {
            const cartao = criarCartao(usuario)
            listaUsuarios.appendChild(cartao)
        }

        mensagem.textContent = `${usuarios.length} usuários carregados.`
    } catch (erro) {
        console.error(erro)
        mensagem.textContent = "Não foi possível carregar a lista de usuários."
    } finally {
        listaUsuarios.setAttribute("aria-busy", "false")
        botaoCarregar.disabled = false
    }
}

botaoCarregar.addEventListener("click", carregarUsuarios)
