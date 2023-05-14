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
      res.status(200).send(editoraResultado);
    } catch (err) {
      next(err);
    }
  };

  static cadastrarEditora = async (req, res, next) => {
    const editora = new editoras(req.body);
    try {
      await editora.save();
      res.status(201).send({ message: `Editora ${editora.nome} cadastrada` });
    } catch (err) {
      next(err);
    }
  };

  static atualizarEditora = async (req, res, next) => {
    const { id } = req.params;
    const novaInfo = req.body;
    try {
      await editoras.findByIdAndUpdate(id, { $set: novaInfo });
      res.status(200).send({ message: 'Editora atualizada com sucesso' });
    } catch (err) {
      next(err);
    }
  };

  static excluirEditora = async (req, res, next) => {
    const { id } = req.params;
    try {
      const editora = await editoras.findByIdAndDelete(id);
      res.status(200).send({ message: `Editora ${editora.nome} excluída com sucesso` });
    } catch (err) {
      next(err);
    }
  };
}

export default EditoraController;