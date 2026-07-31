const conteudos = ["Variáveis", "Operadores", "DOM", "Condições"]
const listaConteudos = document.querySelector("#lista-conteudos")

conteudos.push("Repetições")

for (const conteudo of conteudos) {
    const item = document.createElement("li")
    item.textContent = conteudo
    listaConteudos.appendChild(item)
}

console.log(`Quantidade de conteúdos: ${conteudos.length}`)
