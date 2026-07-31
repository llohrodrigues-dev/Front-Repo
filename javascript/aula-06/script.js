const primeiroNumero = Number(prompt("Digite o primeiro número:"))
const segundoNumero = Number(prompt("Digite o segundo número:"))
const soma = primeiroNumero + segundoNumero
const resultado = document.querySelector("#resultado")

resultado.textContent = `${primeiroNumero} + ${segundoNumero} = ${soma}`
