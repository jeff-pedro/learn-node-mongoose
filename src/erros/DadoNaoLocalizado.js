import ErroBase from './ErroBase.js';

class DadoNaoLocalizado extends ErroBase {
  constructor(err) {
    super(err.message, 404);
  }
}

export default DadoNaoLocalizado;