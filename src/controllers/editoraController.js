import NaoEncontrado from '../erros/NaoEncontrado.js';
import editoras from '../models/Editora.js';

class EditoraController {

  static listarEditoras = async (req, res, next) => {
    try {
      const editorasResultado = await editoras.find();
      res.status(200).send(editorasResultado);
    } catch (err) {
      next(err);
    }
  };

  static listarEditoraPorId = async (req, res, next) => {
    const { id } = req.params;
    
    try {
      const editoraResultado = await editoras.findById(id);

      if(editoraResultado !== null) {
        res.status(200).send(editoraResultado);
      } else {
        next(new NaoEncontrado('Id da Editora não foi localizado'));
      }

    } catch (err) {
      next(err);
    }
  };

  static cadastrarEditora = async (req, res, next) => {
    const editora = new editoras(req.body);
    
    try {
      await editora.save();
      res.status(201).send({ message: 'Editora cadastrada com sucesso' });
    } catch (err) {
      next(err);
    }
  };

  static atualizarEditora = async (req, res, next) => {
    const { id } = req.params;
    const novaInfo = req.body;
    
    try {
      const editoraAtualizada = await editoras.findByIdAndUpdate(id, { $set: novaInfo });

      if(editoraAtualizada !== null) {
        res.status(200).send({ message: 'Editora atualizada com sucesso' });
      } else {
        next(new NaoEncontrado('Id da Editora não foi localizado'));
      }

    } catch (err) {
      next(err);
    }
  };

  static excluirEditora = async (req, res, next) => {
    const { id } = req.params;
    
    try {
      const editoraExcluida = await editoras.findByIdAndDelete(id);

      if(editoraExcluida !== null) {
        res.status(200).send({ message: 'Editora removida com sucesso' });
      } else {
        next(new NaoEncontrado('Id da Editora não foi localizado'));
      }

    } catch (err) {
      next(err);
    }
  };
}

export default EditoraController;
