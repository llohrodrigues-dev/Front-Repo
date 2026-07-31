const idade = 20
const possuiDocumento = true
const idadeMinima = 18

const eMaiorDeIdade = idade >= idadeMinima
const podeEntrar = eMaiorDeIdade && possuiDocumento

console.log(`É maior de idade: ${eMaiorDeIdade}`)
console.log(`Pode entrar: ${podeEntrar}`)
console.log(`A idade é exatamente 20: ${idade === 20}`)
console.log(`A idade é diferente de 18: ${idade !== 18}`)
