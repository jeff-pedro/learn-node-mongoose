import livros from '../models/Livro.js';

class LivroController {
    
  static listarLivros = (req, res) => {
    livros.find()
      .populate('editora', 'nome')
      .populate('autor', 'nome')
      .exec((err, livros) => {
        res.status(200).json(livros);
      });
  };

  static listarLivroPorId = (req, res) => {
    const {id} = req.params;
    livros.findById(id)
      .populate('editora')
      .populate('autor')  
      .exec((err, livro) => {
        if (!err) {
          res.status(200).send(livro);
        } else {
          res.status(400).send({message: `${err.message} - Livro não encontrado.`});
        }
      });
  };
        
  static listarLivroPorEditora = (req, res) => {
    const editora = req.query.editora;

    livros.find({'editora': editora}, {}, (err, livros) => {
      res.status(200).send(livros);
    
    });

    // const editora = "Alura";//req.query.editora;
        
    // livros.find({'editora': editora}, {}, (err, livros) => {
    //     if (!err) {
    //         res.status(200).send(livros);
    //     } else {
    //         res.status(400).send({message: err.message});
    //     }
    // });
  };

  static listarLivroPorAutor = (req, res) => {
    const autor = req.query.autor;
    livros.find({'autor': autor}, {}, (err, livros) => {
      res.status(200).send(livros);
    });
  };

  static cadastrarLivro = (req, res) => {
    let livro = new livros(req.body);
    livro.save((err) => {
      if (err) {
        res.status(500).send({message: `${err.message} - Erro ao cadastrar o livro.`});
      } else {
        res.status(201).send(`Livro "${req.body.titulo}" cadastrado com sucesso.`);
      }
    });
  };

  static atualizarLivro = (req, res) => {
    const {id} = req.params;
    livros.findByIdAndUpdate(id, {$set: req.body}, (err) => {
      if (!err) {
        res.status(200).send('Livro atualizado com sucesso.');
      } else {
        res.status(500).send({message: err.message});
      }
    });
  };

  static excluirLivro = (req, res) => {
    const {id} = req.params;
    livros.findByIdAndDelete(id, (err) => {
      if (!err) {
        res.status(200).send({message: `Livro id:${id} excluído.`});
      } else {
        res.status(500).send({message: err.message});
      }
    });
  };

}

export default LivroController;
