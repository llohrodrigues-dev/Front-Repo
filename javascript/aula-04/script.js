const nome = prompt("Qual é o seu nome?")
const mensagem = document.querySelector("#mensagem")

mensagem.textContent = `Olá, ${nome}! Seja bem-vindo aos estudos de JavaScript.`
