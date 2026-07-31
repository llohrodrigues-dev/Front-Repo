const formulario = document.querySelector("#formulario-nota")
const campoNota = document.querySelector("#nota")
const resultado = document.querySelector("#resultado")

formulario.addEventListener("submit", function (evento) {
    evento.preventDefault()

    const nota = Number(campoNota.value)

    if (nota >= 7) {
        resultado.textContent = "Situação: aprovado."
    } else if (nota >= 5) {
        resultado.textContent = "Situação: recuperação."
    } else {
        resultado.textContent = "Situação: reprovado."
    }
})
