import mongoose from 'mongoose';

function manipuladorDeErros(err, req, res, next) {
  if (err.message === 'Id do Autor não localizado') {
    res.status(404).json({ message: err.message });
  }

  if (err instanceof mongoose.Error.CastError) {
    res.status(400).json({ message: 'Um ou mais dados fornecidos estão incorretos' });
  } else {
    res.status(500).send({ message: 'Erro interno do servidor' });
  }
}

export default manipuladorDeErros;