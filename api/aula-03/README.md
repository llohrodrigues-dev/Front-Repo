# Aula 03 - Entendendo Promises

## O que aprendi

Entendi que o `fetch` retorna uma Promise. Ela representa uma operação que ainda não terminou e pode ser concluída ou rejeitada.

## Conceitos praticados

- operação assíncrona;
- encadeamento com `then`;
- tratamento de falha com `catch`;
- finalização com `finally`;
- botão desabilitado durante a requisição.

## Minhas anotações

Cada `then` recebe o resultado da etapa anterior. O `catch` fica responsável por uma falha, enquanto o `finally` executa no final dos dois caminhos.

## Dificuldades

A ordem visual do código parece simples, mas as funções dentro de `then` só são executadas quando a etapa anterior termina.

## Material de apoio

- [Usando Promises - MDN](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Guide/Using_promises)

## Próximo passo

Verificar o código da resposta HTTP, porque nem todo erro da API ativa o `catch` automaticamente.
