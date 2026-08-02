# Aula 05 - Usando async e await

## O que aprendi

Reescrevi uma requisição usando `async` e `await`. O resultado continua sendo assíncrono, mas o código fica organizado em uma sequência que consegui acompanhar com mais facilidade.

## Conceitos praticados

- função assíncrona com `async`;
- espera de uma Promise com `await`;
- tratamento com `try...catch`;
- bloco `finally`;
- verificação de `response.ok`.

## Minhas anotações

O `await` só pode ser usado dentro de uma função assíncrona. Também preciso usar um `await` para a requisição e outro para converter o corpo da resposta em JSON.

## Dificuldades

Foi importante perceber que `async` e `await` não substituem as Promises. Eles são outra maneira de trabalhar com elas.

## Material de apoio

- [Como usar Promises - MDN](https://developer.mozilla.org/pt-BR/docs/Learn_web_development/Extensions/Async_JS/Promises)

## Próximo passo

Buscar vários registros e criar uma lista de elementos com os dados recebidos.
