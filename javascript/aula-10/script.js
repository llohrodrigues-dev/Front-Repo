const resultado = document.querySelector("#resultado")
const botaoContar = document.querySelector("#botao-contar")
const botaoLimpar = document.querySelector("#botao-limpar")
let quantidadeDeCliques = 0

botaoContar.addEventListener("click", function () {
    quantidadeDeCliques++
    resultado.textContent = `Cliques: ${quantidadeDeCliques}`
})

botaoLimpar.addEventListener("click", function () {
    quantidadeDeCliques = 0
    resultado.textContent = "Cliques: 0"
})
