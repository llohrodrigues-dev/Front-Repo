# Semana 6 - Organização e boas práticas

## O que foi melhorado

Na primeira versão, toda a interface estava dentro de `App.jsx`. O projeto funcionava, mas o componente reunia o formulário, o cabeçalho, a lista e as regras do estado no mesmo arquivo.

Separei a interface em três componentes:

- `Cabecalho` apresenta o título;
- `FormularioTarefa` recebe os dados e eventos do formulário;
- `ListaTarefas` mostra os itens e seus botões.

## O que foi preservado

A aplicação continua adicionando, concluindo e removendo tarefas da mesma forma. Mantive o estado no componente `App` porque os dois componentes da lista precisam desses dados.

## O que aprendi

Entendi que refatorar não significa criar funcionalidades novas. A mudança serviu para deixar cada arquivo com uma responsabilidade mais fácil de identificar e explicar.
