import livros from '../models/Livro.js';

class LivroController {

  static listarLivros = async (req, res) => {
    try {
      const livrosResultado = await livros.find()
        .populate('editora', 'nome')
        .populate('autor', 'nome')
        .exec();
      res.status(200).json(livrosResultado);
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  };

  static listarLivroPorId = async (req, res) => {
    const { id } = req.params;
    try {
      const livroResultado = await livros.findById(id)
        .populate('editora')
        .populate('autor')
        .exec();
      res.status(200).send(livroResultado);
    } catch (err) {
      res.status(500).send({ message: err.message });
    }
  };

  static listarLivroPorEditora = async (req, res) => {
    const { editora } = req.query;
    try {
      const livrosResultado = await livros.find({ 'editora': editora });
      res.status(200).send(livrosResultado);
    } catch (err) {
      res.status(500).send({ message: err.message });
    }
  };

  static cadastrarLivro = async (req, res) => {
    const livro = new livros(req.body);
    try {
      await livro.save();
      res.status(201).send({ message: `Livro ${livro.titulo} cadastrado com sucesso.` });
    } catch (err) {
      res.status(500).send({ message: `${err.message} - Erro ao cadastrar o livro.` });
    }
  };

  static atualizarLivro = async (req, res) => {
    const { id } = req.params;
    const novaInfo = req.body;
    try {
      await livros.findByIdAndUpdate(id, { $set: novaInfo });
      res.status(200).send({ message: 'Livro atualizado com sucesso.' });
    } catch (err) {
      res.status(500).send({ message: err.message });
    }
  };

  static excluirLivro = async (req, res) => {
    const { id } = req.params;
    try {
      await livros.findByIdAndDelete(id);
      res.status(200).send({ message: `Livro id:${id} excluído.` });
    } catch (err) {
      res.status(500).send({ message: err.message });
    }
  };
}

export default LivroController;
