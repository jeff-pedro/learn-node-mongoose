import express from 'express';
import db from './config/dbConnect.js';
import routes from './routes/index.js';
import mongoose from 'mongoose';

db.on('error', console.log.bind(console, 'Erro de conexão'));
db.once('open', () => {
  console.log('conexão com o banco realizada com sucesso');
});

const app = express();
routes(app);
app.use((err, req, res, next) => {
  if (err.message === 'Id do Autor não localizado') {
    res.status(404).json({ message: err.message });
  }

  if (err instanceof mongoose.Error.CastError) {
    res.status(400).json({ message: 'Um ou mais dados fornecidos estão incorretos' });
  } else {
    res.status(500).send({ message: 'Erro interno do servidor' });
  }
});

export default app;
