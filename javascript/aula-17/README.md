# Aula 17 - Revisão e validação de formulário

## O que aprendi

Nesta revisão reuni seleção de elementos, eventos, funções e condições para validar um formulário sem depender apenas das regras automáticas do navegador.

## Conceitos praticados

- evento `submit`;
- limpeza de mensagens antigas;
- validação de campos vazios;
- propriedade `validity.valid`;
- mensagens próximas aos campos;
- retorno acessível com `aria-live`;
- limpeza do formulário após o sucesso.

## Minhas anotações

Usei `novalidate` para praticar as mensagens feitas com JavaScript. Os campos continuam identificados por labels e os erros são ligados a eles com `aria-describedby`.

## Dificuldades

Foi necessário controlar uma variável lógica para verificar todos os campos antes de confirmar o cadastro.

## Próximo passo

Desenvolver o projeto `js-dom`, reunindo os principais conteúdos da semana em uma lista dinâmica.
