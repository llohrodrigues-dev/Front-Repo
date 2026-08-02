# Projeto API - Busca de livros

## Sobre

Este projeto encerra a Semana 4 da trilha. Criei uma página que pesquisa livros pelo título usando a API pública da Open Library.

## Objetivo

Praticar uma requisição com parâmetro de busca, tratar a resposta e transformar os dados recebidos em cartões.

## Tecnologias utilizadas

- HTML;
- CSS;
- JavaScript;
- Fetch API;
- Open Library Search API.

## Funcionalidades

- validação do título digitado;
- busca de livros por título;
- exibição de até 12 resultados;
- autoria e ano da primeira publicação;
- link para os detalhes de cada livro;
- estados inicial, carregando, sucesso, vazio e erro;
- mensagens acessíveis durante a busca;
- layout responsivo.

## Estrutura

```text
projeto-api/
├── index.html
├── style.css
├── script.js
└── README.md
```

## O que aprendi

Consegui reunir formulários, eventos, funções, arrays, DOM e os conteúdos novos de `fetch`, Promises, `async` e `await`. Também entendi melhor a diferença entre uma busca sem resultados e uma requisição que realmente falhou.

## Dificuldades

Alguns livros não possuem autor ou ano de publicação nos dados recebidos. Precisei mostrar um texto alternativo para não deixar informações vazias nos cartões.

## Acessibilidade

Usei label no campo, mensagens com `aria-live`, indicação de campo inválido, foco visível, botão real, lista semântica e links com nomes específicos para cada livro.

## API utilizada

- [Documentação da Open Library Search API](https://openlibrary.org/dev/docs/api/search)

A API é pública e não exige chave. A busca solicita somente os campos utilizados pela página.

## Melhorias futuras

Depois de aprender novos conteúdos, posso adicionar paginação e permitir outros tipos de busca, como autor ou assunto. Não implementei isso nesta etapa para manter o projeto compatível com os conhecimentos estudados.
