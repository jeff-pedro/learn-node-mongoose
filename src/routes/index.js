import express from 'express';
import livros from './livrosRoutes.js';
import editoras from './editorasRoutes.js';
import autores from './autoresRoutes.js';

const routes = (app) => {
  app.route('/').get((req, res) => {
    res.status(200).send({ titulo: 'API RestFul com Express e MongoDB' });
  });

  app.use(
    express.json(),
    livros,
    editoras,
    autores
  );
};

export default routes;
