# Desafio Técnico - Backend

O propósito desse desafio é a criação de uma API que fará a persistência de dados de um quadro de kanban. Esse quadro possui listas, que contém cards.

## Rodando o Backend

Um frontend de exemplo foi disponibilizado na pasta FRONT.

Para rodá-lo, faça:

```console
> cd BACK
> npm install
> npm run dev
```

## Justificativas
 
 Acabei não conseguindo criar o middleware de log, não sei por qual motivo ele não estava imprimindo os valores da response, mesmo eu colocando o uso do logger após a chamada das rotas de card.

 ## Trabalhos futuros

 - Mover as validações para um arquivo, ao invés de usar direto na rota; 
 - Criar migrations tanto para o usuário quando para o card;
 - Criar testes para cada camada do sistema;
 - Criar mais validações à medida que os dados vão trafegando dentro dos arquivos;
 - Usar redis para cache da consulta para melhorar o tempo de resposta.
