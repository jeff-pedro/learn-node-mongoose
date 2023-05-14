import mongoose from 'mongoose';
import ErroBase from '../erros/ErroBase.js';
import ErroValidacao from '../erros/ErroValidacao.js';
import RequisicaoIncorreta from '../erros/RequisicaoIncorreta.js';
import DadoNaoLocalizado from '../erros/DadoNaoLocalizado.js';

function manipuladorDeErros(err, req, res, next) {
  // console.error(err);

  if (err instanceof mongoose.Error.CastError) {
    new RequisicaoIncorreta().enviarResposta(res);
  } else if (err instanceof mongoose.Error.ValidationError) {
    new ErroValidacao(err).enviarResposta(res);
  } else if (err.message === 'Id do Autor não localizado') {
    new DadoNaoLocalizado(err).enviarResposta(res);
  } else {
    new ErroBase().enviarResposta(res);
  }
}

export default manipuladorDeErros;