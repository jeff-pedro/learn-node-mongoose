import NaoEncontrado from '../erros/NaoEncontrado.js';
import { autores } from '../models/index.js';

class AutorController {

  static listarAutores = async (req, res, next) => {
    try {
      const autoresResultado = await autores.find();
      res.status(200).send(autoresResultado);
    } catch (err) {
      next(err);
    }
  };

  static listarAutorPorID = async (req, res, next) => {
    const { id } = req.params;

    try {
      const autorResultado = await autores.findById(id);

      if (autorResultado !== null) {
        res.status(200).send(autorResultado);
      } else {
        next(new NaoEncontrado('Id do Autor(a) não foi localizado'));
      }
      
    } catch (err) {
      next(err);
    }
  };

  static cadastrarAutor = async (req, res, next) => {
    const autor = new autores(req.body);
   
    try {
      await autor.save();
      res.status(201).send({ message: 'Autor(a) criado(a) com sucesso' });
    } catch (err) {
      next(err);
    }
  };

  static atualizarAutor = async (req, res, next) => {
    const { id } = req.params;
    const novaInfo = req.body;
   
    try {
      const autorAtualizado = await autores.findByIdAndUpdate(id, { $set: novaInfo });
      
      if(autorAtualizado !== null) {
        res.status(200).send({ message: 'Autor(a) atualizado(a) com sucesso' });
      } else {
        next(new NaoEncontrado('Id do Autor(a) não foi localizado'));
      }
    } catch (err) {
      next(err);
    }
  };

  static excluirAutor = async (req, res, next) => {
    const { id } = req.params;
   
    try {
      const autorExcluido = await autores.findByIdAndDelete(id);
      
      if(autorExcluido !== null) {
        res.status(200).send({ message: 'Autor(a) removido(a) com sucesso' });
      } else {
        next(new NaoEncontrado('Id do Autor(a) não foi localizado'));
      }

    } catch (err) {
      next(err);
    }
  };
}

export default AutorController;
