import NaoEncontrado from '../erros/NaoEncontrado.js';
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

      if(livroResultado !== null) {
        res.status(200).send(livroResultado);
      } else {
        next(new NaoEncontrado('Id do Livro não foi localizado'));
      }

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

      if(livroAtualizado !== null) {
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
      
      if(livroExcluido !== null) {
        res.status(200).send({ message: 'Livro removido com sucesso' });
      } else {
        next(new NaoEncontrado('Id do Livro não foi localizado'));
      }
      
    } catch (err) {
      next(err);
    }
  };
}

export default LivroController;
