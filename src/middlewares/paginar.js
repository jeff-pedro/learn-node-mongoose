import RequisicaoIncorreta from '../erros/RequisicaoIncorreta.js';

async function paginar(req, res, next) {
  let { limite = 5, pagina = 1, ordenacao = '_id:-1' } = req.query;

  let [campoOrdenacao, ordem] = ordenacao.split(':');

  limite = parseInt(limite);
  pagina = parseInt(pagina);
  ordem = parseInt(ordem);

  const { resultado } = req;

  if (limite > 0 && pagina > 0) {
    const resultadoPaginado = await resultado.find()
      .sort({ [campoOrdenacao]: ordem })
      .skip((pagina - 1) * limite)
      .limit(limite)
      .populate('editora', 'nome')
      .populate('autor', 'nome')
      .exec();

    res.status(200).json(resultadoPaginado);
  } else {
    next(new RequisicaoIncorreta());
  }
}

export default paginar;