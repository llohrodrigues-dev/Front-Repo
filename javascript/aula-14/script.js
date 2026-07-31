const formulario = document.querySelector("#formulario-tabuada")
const campoNumero = document.querySelector("#numero")
const tabuada = document.querySelector("#tabuada")

formulario.addEventListener("submit", function (evento) {
    evento.preventDefault()

    const numero = Number(campoNumero.value)
    tabuada.innerHTML = ""

    for (let multiplicador = 1; multiplicador <= 10; multiplicador++) {
        const item = document.createElement("li")
        item.textContent = `${numero} × ${multiplicador} = ${numero * multiplicador}`
        tabuada.appendChild(item)
    }
})
