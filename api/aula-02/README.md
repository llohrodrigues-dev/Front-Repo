# Aula 02 - Minha primeira requisição

## O que aprendi

Fiz minha primeira requisição com `fetch`. Usei uma API de testes chamada JSONPlaceholder e mostrei o nome e o e-mail de um usuário na página.

## Conceitos praticados

- endereço de um recurso da API;
- requisição do tipo GET;
- função `fetch`;
- objeto de resposta;
- método `response.json()`;
- exibição dos dados no DOM.

## Minhas anotações

O resultado não fica disponível imediatamente. Primeiro a requisição é enviada, depois a resposta é convertida e só então consigo mostrar os dados.

## Dificuldades

Eu precisei lembrar que `response.json()` também leva um tempo para terminar. Por isso existe uma segunda etapa com `then`.

## Material de apoio

- [Guia do JSONPlaceholder](https://jsonplaceholder.typicode.com/guide/)
- [Usando Fetch - MDN](https://developer.mozilla.org/pt-BR/docs/Web/API/Fetch_API/Using_Fetch)

## Próximo passo

Entender melhor o que são Promises e tratar uma falha na requisição.
