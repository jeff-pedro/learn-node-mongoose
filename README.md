# Livraria

> Projeto de uma Livraria desenvolvida para estudar sobre: **API RestFul com Node.js**, **MongoDB** e **Express**.


## Requisitos

- Instância do **MongoDB** (para esse projeto foi usado uma instância no MongoDB Atlas)


## Referências

- [Mongoose official docs](https://mongoosejs.com/docs/)
    - [Built-in Validators](https://mongoosejs.com/docs/validation.html#built-in-validators)
    - [Custom Validators](https://mongoosejs.com/docs/validation.html#custom-validators)
    - [Global Validators](https://mongoosejs.com/docs/validation.html#global-schematype-validation)
- [MongoDB official docs](https://www.mongodb.com/docs/)
    - [Query and Projection Operators](https://www.mongodb.com/docs/manual/reference/operator/query/)
    - [Update Operators](https://www.mongodb.com/docs/manual/reference/operator/update/)
    - [MongoDB Schema Design](https://www.mongodb.com/blog/post/6-rules-of-thumb-for-mongodb-schema-design)
- [Express official docs](https://expressjs.com/)
- [HTTP status code](https://developer.mozilla.org/pt-BR/docs/Web/HTTP/Status)


## Instalando

```
    npm install
    npm start
```

## Funcionalidades

- CRUD de autores, editoras e livros
- Busca de livros filtrado por nome do autor, editora e número de paginas


## Explorado

- [Tratamento dos diferentes tipos de erros](https://github.com/jeff-pedro/learn-node-mongoose/tree/02-tratando_erros): validação, operacionais e programação
- Manipulação de erros com Middlewares do Express
- Centralização do tratamento de erros e separação de responsabilidades
- [Validações](https://github.com/jeff-pedro/learn-node-mongoose/tree/03-validando_dados) nativas, personalizada e globais nos Schemas do Mongoose
- [Filtros](https://github.com/jeff-pedro/learn-node-mongoose/tree/04-buscas_e_filtros) via query params e busca de texto com expressões regulares
- Expressões regulares através da classe RegExp e de operadores do MongoDB
- Uso dos operadores de comparação do MongoDB


## Tecnologias

- **express**: para construção da API Restful
- **mongoose**: para manipulação de dados no *MongoDB*
- **dotenv**: para armazenar dados sensíveis em variáveis de ambiente
- **eslint**: para formatação do código e identificação de bugs


## Documentação

[em breve]