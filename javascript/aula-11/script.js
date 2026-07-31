const formulario = document.querySelector("#formulario-idade")
const campoIdade = document.querySelector("#idade")
const resultado = document.querySelector("#resultado")

formulario.addEventListener("submit", function (evento) {
    evento.preventDefault()

    const idade = Number(campoIdade.value)

    if (idade >= 18) {
        resultado.textContent = "Você é maior de idade."
    } else {
        resultado.textContent = "Você é menor de idade."
    }
})
