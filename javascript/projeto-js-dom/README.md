# Projeto JS DOM - Minha lista de tarefas

## Sobre

Este projeto encerra a Semana 3 da trilha. Criei uma lista dinâmica para reunir os principais conteúdos que pratiquei em JavaScript.

## Objetivo

Adicionar e remover tarefas sem recarregar a página, validando o formulário e mantendo um resumo da quantidade de itens cadastrados.

## Tecnologias utilizadas

- HTML;
- CSS;
- JavaScript.

## Funcionalidades

- validação do campo de descrição;
- inclusão de tarefas na lista;
- remoção individual de tarefas;
- atualização da quantidade de itens;
- mensagem para lista vazia;
- foco devolvido ao campo depois de adicionar uma tarefa;
- mensagens acessíveis para validação e alterações da lista.

## Estrutura

```text
projeto-js-dom/
├── index.html
├── style.css
├── script.js
└── README.md
```

## O que aprendi

Consegui reunir variáveis, arrays, funções, condições, eventos e manipulação do DOM em uma única página. A parte mais interessante foi criar cada item com JavaScript e ligar um evento ao botão de remoção.

## Dificuldades

Ao remover uma tarefa, os índices das tarefas seguintes também precisam ser atualizados. Separei essa parte em uma função para entender melhor o processo.

## Acessibilidade

Usei elementos semânticos, labels, botões reais, foco visível, mensagens com `aria-live`, identificação de campo inválido e nomes específicos nos botões de remoção.

## Melhorias futuras

Depois de estudar novos conteúdos, posso salvar as tarefas para que elas continuem disponíveis ao fechar a página. Não implementei isso agora porque armazenamento no navegador ainda não fez parte desta etapa.
