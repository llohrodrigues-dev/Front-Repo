const formulario = document.querySelector("#formulario-media")
const campoPrimeiraNota = document.querySelector("#primeira-nota")
const campoSegundaNota = document.querySelector("#segunda-nota")
const resultado = document.querySelector("#resultado")

function calcularMedia(primeiraNota, segundaNota) {
    return (primeiraNota + segundaNota) / 2
}

function informarSituacao(media) {
    if (media >= 7) {
        return "aprovado"
    }

    return "reprovado"
}

formulario.addEventListener("submit", function (evento) {
    evento.preventDefault()

    const primeiraNota = Number(campoPrimeiraNota.value)
    const segundaNota = Number(campoSegundaNota.value)
    const media = calcularMedia(primeiraNota, segundaNota)
    const situacao = informarSituacao(media)

    resultado.textContent = `Média: ${media.toFixed(1)}. Situação: ${situacao}.`
})
