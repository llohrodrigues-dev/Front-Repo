# Aula 04 - Tratando respostas e erros

## O que aprendi

Aprendi que o `fetch` não considera uma resposta 404 como falha de rede. Por isso preciso verificar a propriedade `response.ok` antes de utilizar os dados.

## Conceitos praticados

- código de estado HTTP;
- propriedade `response.ok`;
- propriedade `response.status`;
- criação de um erro com `throw`;
- mensagem compreensível para a pessoa usuária;
- registro técnico no console.

## Minhas anotações

O `catch` trata problemas de rede e também recebe os erros que eu lanço durante o encadeamento. A mensagem da página deve ser simples, enquanto o console pode guardar o detalhe técnico.

## Dificuldades

Antes desta aula eu imaginava que qualquer resposta com erro iria direto para o `catch`. A verificação de `ok` evita tentar mostrar dados que não existem.

## Material de apoio

- [Usando Fetch - MDN](https://developer.mozilla.org/pt-BR/docs/Web/API/Fetch_API/Using_Fetch)

## Próximo passo

Reescrever a mesma lógica usando `async`, `await` e `try...catch`.
