const formulario = document.querySelector("#formulario-tarefa")
const campoTarefa = document.querySelector("#tarefa")
const erroTarefa = document.querySelector("#erro-tarefa")
const listaTarefas = document.querySelector("#lista-tarefas")
const listaVazia = document.querySelector("#lista-vazia")
const contadorTarefas = document.querySelector("#contador-tarefas")
const tarefas = []

function atualizarResumo() {
    const quantidade = tarefas.length

    if (quantidade === 0) {
        contadorTarefas.textContent = "Nenhuma tarefa cadastrada."
        listaVazia.hidden = false
    } else if (quantidade === 1) {
        contadorTarefas.textContent = "1 tarefa cadastrada."
        listaVazia.hidden = true
    } else {
        contadorTarefas.textContent = `${quantidade} tarefas cadastradas.`
        listaVazia.hidden = true
    }
}

function removerTarefa(indice, item) {
    tarefas.splice(indice, 1)
    item.remove()

    const itens = listaTarefas.querySelectorAll("li")

    for (let novoIndice = indice; novoIndice < itens.length; novoIndice++) {
        const botao = itens[novoIndice].querySelector("button")
        botao.dataset.indice = novoIndice
    }

    atualizarResumo()
}

function criarItemTarefa(descricao, indice) {
    const item = document.createElement("li")
    const texto = document.createElement("span")
    const botaoRemover = document.createElement("button")

    item.classList.add("item-tarefa")
    texto.textContent = descricao

    botaoRemover.type = "button"
    botaoRemover.classList.add("botao-remover")
    botaoRemover.textContent = "Remover"
    botaoRemover.dataset.indice = indice
    botaoRemover.setAttribute("aria-label", `Remover tarefa: ${descricao}`)

    botaoRemover.addEventListener("click", function () {
        const indiceDaTarefa = Number(botaoRemover.dataset.indice)
        removerTarefa(indiceDaTarefa, item)
    })

    item.appendChild(texto)
    item.appendChild(botaoRemover)
    listaTarefas.appendChild(item)
}

function validarTarefa(descricao) {
    erroTarefa.textContent = ""
    campoTarefa.classList.remove("campo-invalido")
    campoTarefa.removeAttribute("aria-invalid")

    if (descricao === "") {
        erroTarefa.textContent = "Digite uma descrição antes de adicionar."
        campoTarefa.classList.add("campo-invalido")
        campoTarefa.setAttribute("aria-invalid", "true")
        campoTarefa.focus()
        return false
    }

    return true
}

formulario.addEventListener("submit", function (evento) {
    evento.preventDefault()

    const descricao = campoTarefa.value.trim()

    if (!validarTarefa(descricao)) {
        return
    }

    tarefas.push(descricao)
    criarItemTarefa(descricao, tarefas.length - 1)
    atualizarResumo()

    formulario.reset()
    campoTarefa.focus()
})

atualizarResumo()
