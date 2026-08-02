const resultado = document.querySelector("#resultado")
const areaTextoJson = document.querySelector("#texto-json")

const textoJson = `{
    "nome": "Marina",
    "curso": "Desenvolvimento Front-End",
    "modulo": 4
}`

const dadosDoEstudante = JSON.parse(textoJson)

resultado.textContent = `${dadosDoEstudante.nome} está no módulo ${dadosDoEstudante.modulo} do curso de ${dadosDoEstudante.curso}.`
areaTextoJson.textContent = textoJson
