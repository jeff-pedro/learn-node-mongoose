import NaoEncontrado from '../erros/NaoEncontrado.js';
import { livros, autores, editoras } from '../models/index.js';

class LivroController {

  static listarLivros = async (req, res, next) => {
    try {
      const { limite = 5, pagina = 1 } = req.query;

      const livrosResultado = await livros.find()
        .skip((pagina - 1) * limite)
        .limit(limite)
        .populate('editora', 'nome')
        .populate('autor', 'nome')
        .exec();

      res.status(200).json(livrosResultado);
    } catch (err) {
      next(err);
    }
  };

  static listarLivroPorId = async (req, res, next) => {
    const { id } = req.params;

    try {
      const livroResultado = await livros.findById(id)
        .populate('editora')
        .populate('autor')
        .exec();

      if (livroResultado !== null) {
        res.status(200).send(livroResultado);
      } else {
        next(new NaoEncontrado('Id do Livro não foi localizado'));
      }

    } catch (err) {
      next(err);
    }
  };

  static listarLivroPorFiltro = async (req, res, next) => {
    try {
      const busca = await processaBusca(req.query);

      if (busca !== null) {
        const livrosResultado = await livros
          .find(busca)
          .populate('editora')
          .populate('autor')
          .exec();

        res.status(200).send(livrosResultado);
      } else {
        res.status(200).send([]);
      }

    } catch (err) {
      next(err);
    }
  };

  static cadastrarLivro = async (req, res, next) => {
    const livro = new livros(req.body);

    try {
      await livro.save();
      res.status(201).send({ message: `Livro ${livro.titulo} cadastrado com sucesso` });
    } catch (err) {
      next(err);
    }
  };

  static atualizarLivro = async (req, res, next) => {
    const { id } = req.params;
    const novaInfo = req.body;

    try {
      const livroAtualizado = await livros.findByIdAndUpdate(id, { $set: novaInfo });

      if (livroAtualizado !== null) {
        res.status(200).send({ message: 'Livro atualizado com sucesso' });
      } else {
        next(new NaoEncontrado('Id do Livro não foi localizado'));
      }

    } catch (err) {
      next(err);
    }
  };

  static excluirLivro = async (req, res, next) => {
    const { id } = req.params;

    try {
      const livroExcluido = await livros.findByIdAndDelete(id);

      if (livroExcluido !== null) {
        res.status(200).send({ message: 'Livro removido com sucesso' });
      } else {
        next(new NaoEncontrado('Id do Livro não foi localizado'));
      }

    } catch (err) {
      next(err);
    }
  };
}

async function processaBusca(parametros) {
  const { titulo, nomeEditora, nomeAutor, minPaginas, maxPaginas } = parametros;

  let busca = {};

  if (titulo) busca.titulo = { $regex: titulo, $options: 'i' };

  if (minPaginas || maxPaginas) busca.num_paginas = {};

  if (minPaginas) busca.num_paginas.$gte = minPaginas;
  if (maxPaginas) busca.num_paginas.$lte = maxPaginas;

  if (nomeEditora) {
    const editora = await editoras.findOne({ nome: nomeEditora });

    if (editora !== null) {
      busca.editora = editora._id;
    } else {
      busca = null;
    }
  }

  if (nomeAutor) {
    const autor = await autores.findOne({ nome: nomeAutor });

    if (autor !== null) {
      busca.autor = autor._id;
    } else {
      busca = null;
    }
  }

  return busca;
}

export default LivroController;
