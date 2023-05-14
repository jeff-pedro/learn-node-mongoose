import livros from '../models/Livro.js';

class LivroController {

  static listarLivros = async (req, res, next) => {
    try {
      const livrosResultado = await livros.find()
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
      res.status(200).send(livroResultado);
    } catch (err) {
      next(err);
    }
  };

  static listarLivroPorEditora = async (req, res, next) => {
    const { editora } = req.query;
    try {
      const livrosResultado = await livros.find({ 'editora': editora });
      res.status(200).send(livrosResultado);
    } catch (err) {
      next(err);
    }
  };

  static cadastrarLivro = async (req, res, next) => {
    const livro = new livros(req.body);
    try {
      await livro.save();
      res.status(201).send({ message: `Livro ${livro.titulo} cadastrado com sucesso.` });
    } catch (err) {
      next(err);
    }
  };

  static atualizarLivro = async (req, res, next) => {
    const { id } = req.params;
    const novaInfo = req.body;
    try {
      await livros.findByIdAndUpdate(id, { $set: novaInfo });
      res.status(200).send({ message: 'Livro atualizado com sucesso.' });
    } catch (err) {
      next(err);
    }
  };

  static excluirLivro = async (req, res, next) => {
    const { id } = req.params;
    try {
      await livros.findByIdAndDelete(id);
      res.status(200).send({ message: `Livro id:${id} excluído.` });
    } catch (err) {
      next(err);
    }
  };
}

export default LivroController;
