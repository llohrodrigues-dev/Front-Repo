# Aula 06 - Renderizando uma lista

## O que aprendi

Busquei uma coleção de usuários e criei um cartão para cada item. Também comecei a tratar os diferentes estados da interface.

## Conceitos praticados

- resposta contendo um array;
- repetição com `for...of`;
- criação de elementos do DOM;
- estado inicial;
- carregamento;
- sucesso;
- resultado vazio;
- erro;
- atributo `aria-busy`.

## Minhas anotações

Separei a criação do cartão em uma função. Assim a função da requisição fica mais fácil de ler e cada parte possui uma responsabilidade clara.

## Dificuldades

Precisei limpar a lista antes de uma nova busca para não repetir os mesmos cartões. Também foi necessário devolver o botão ao estado normal mesmo quando ocorre um erro.

## Próximo passo

Enviar um valor digitado pela pessoa como parâmetro de busca da API.
