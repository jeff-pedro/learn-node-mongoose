import mongoose from 'mongoose';

function manipuladorDeErros(err, req, res, next) {
  // console.error(err);

  if (err.message === 'Id do Autor não localizado') {
    res.status(404).json({ message: err.message });
  }

  if (err instanceof mongoose.Error.CastError) {
    res.status(400).json({ message: 'Um ou mais dados fornecidos estão incorretos' });
  } else if (err instanceof mongoose.Error.ValidationError) {

    const mensagensErro = Object.values(err.errors)
      .map(erro => erro.message)
      .join('; ');

    res.status(400).json({ message: `Os seguintes erros foram encontrados: ${mensagensErro}` });
  } else {
    res.status(500).json({ message: 'Erro interno do servidor' });
  }
}

export default manipuladorDeErros;