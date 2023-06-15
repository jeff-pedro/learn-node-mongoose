# Livraria

> Projeto de uma Livraria desenvolvida para estudar sobre: **API RestFul com Node.js**, **MongoDB** e **Express**.


## Requisitos

- Instância do **MongoDB** (para esse projeto foi usado uma instância no MongoDB Atlas)


## Referências

- [Mongoose official docs](https://mongoosejs.com/docs/)
    - [Built-in Validators](https://mongoosejs.com/docs/validation.html#built-in-validators)
    - [Custom Validators](https://mongoosejs.com/docs/validation.html#custom-validators)
    - [Global Validators](https://mongoosejs.com/docs/validation.html#global-schematype-validation)
    - [Plugin autopopulate](https://plugins.mongoosejs.io/plugins/autopopulate)
- [MongoDB official docs](https://www.mongodb.com/docs/)
    - [Query and Projection Operators](https://www.mongodb.com/docs/manual/reference/operator/query/)
    - [Update Operators](https://www.mongodb.com/docs/manual/reference/operator/update/)
    - [MongoDB Schema Design](https://www.mongodb.com/blog/post/6-rules-of-thumb-for-mongodb-schema-design)
- [Express official docs](https://expressjs.com/)
- [HTTP status code](https://developer.mozilla.org/pt-BR/docs/Web/HTTP/Status)


## Instalação

```
    npm install
    npm start
```

## Funcionalidades

- CRUD de autores, editoras e livros.
- Busca de livros filtrado por nome do autor, editora e número de páginas.
- Paginação e ordenação dos resultados de pesquisa de livros, autores e editoras.


## Explorado

- [Tratamento dos diferentes tipos de erros](https://github.com/jeff-pedro/learn-node-mongoose/tree/02-tratando_erros): validação, operacionais e programação.
- Manipulação de erros com Middlewares do Express.
- Centralização do tratamento de erros e separação de responsabilidades.
- [Validações](https://github.com/jeff-pedro/learn-node-mongoose/tree/03-validando_dados) nativas, personalizada e globais nos Schemas do Mongoose.
- [Filtros](https://github.com/jeff-pedro/learn-node-mongoose/tree/04-buscas_e_filtros) via query params e busca de texto com expressões regulares.
- Expressões regulares através da classe RegExp e de operadores do MongoDB.
- Uso dos operadores de comparação do MongoDB.
- [Paginação e Ordenação](https://github.com/jeff-pedro/learn-node-mongoose/tree/05-implementando_pagincao) de resultados pesquisados. (_técnica usada no back-end para otimizar buscas ao banco de dados_)
    - paginar resultados em uma rota usando os métodos `skip` e `limit` do _mongoose_.
    - ordenar resultados com o método `sort` do _mongoose_.
- Uso do método `plugin` do _mongoose_, para reaproveitar uma mesma lógica entre diferentes Schemas.
- Uso do plugin autopopulate, para automatizar e reutilizar os 'populates' nos Schemas.
- Separação de responsabilidades e reutilizaçao de código através de _middlewarea do express_ para lidar com as paginações.
- Compartilhamento de informações entre middlewares através do objeto de requisição `req`.
- Possibilidade de [armazenar a chamada de um método assíncrono](https://github.com/jeff-pedro/learn-node-mongoose/blob/05-implementando_paginacao/src/controllers/livroController.js#LL8C9-L8C9) para ser executado posteriormente.

- Mais exemplos de uso de _destructuring_ em arrays e objetos para:
    - computar valor de uma variável e utiliza-lo como chave em um objeto literal [:eye:](https://github.com/jeff-pedro/learn-node-mongoose/blob/05-implementando_paginacao/src/middlewares/paginar.js#L16)
    - nomear elementos de um array e acessa-las como variáveis [:eye:](https://github.com/jeff-pedro/learn-node-mongoose/blob/05-implementando_paginacao/src/middlewares/paginar.js#LL6C3-L6C3)
    - usar nome de propriedade do objeto como variável [:eye:](https://github.com/jeff-pedro/learn-node-mongoose/blob/05-implementando_paginacao/src/middlewares/paginar.js#L12)


## Tecnologias

- **express**: para construção da API Restful
- **mongoose**: para manipulação de dados no *MongoDB*
- **mongoose-autopopulate**: plugin que torna o populate padrão para determinado Schema 
- **dotenv**: para armazenar dados sensíveis em variáveis de ambiente
- **eslint**: para formatação do código e identificação de bugs
- **nodemon**: para automatizar os restarts da aplicação durante o desenvolvimento

## Documentação

[Livraria API Docs](https://documenter.getpostman.com/view/22093498/2s93sgVVfN)
