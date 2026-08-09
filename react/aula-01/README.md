# Aula 01 - Primeiro componente e JSX

## Objetivo

Começar a Semana 5 entendendo como uma aplicação React é iniciada e como um componente descreve uma parte da interface.

## O que aprendi

Um componente funcional é uma função JavaScript que retorna a marcação da interface. O componente `App` começa com letra maiúscula e usa JSX para misturar a estrutura da página com o JavaScript.

Também percebi algumas diferenças entre HTML e JSX. Nesta aula usei `className` no lugar de `class` e mantive todas as tags fechadas corretamente.

## Arquivos principais

- `src/App.jsx`: possui o primeiro componente;
- `src/App.css`: guarda os estilos do componente;
- `src/main.jsx`: renderiza o componente `App` dentro do elemento `root`;
- `src/index.css`: contém os estilos gerais da página.

## Como executar

Dentro desta pasta, use:

```bash
npm install
npm run dev
```

O endereço local será mostrado no terminal.

## Minhas anotações

O arquivo `main.jsx` possui a configuração que coloca o React na página. Por enquanto, o mais importante é entender que `App` é o componente principal e que o conteúdo retornado por ele aparece no navegador.

## Próximo passo

Na próxima aula vou dividir uma interface em componentes menores e combinar esses componentes dentro de `App`.

## Referências

- [Primeiro componente na documentação do React](https://react.dev/learn/your-first-component);
- [Introdução ao JSX](https://react.dev/learn/writing-markup-with-jsx);
- [Primeiros passos com Vite](https://vite.dev/guide/).
