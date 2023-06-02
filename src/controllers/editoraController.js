import editoras from '../models/Editora.js';

class EditoraController {

  static listarEditoras = async (req, res) => {
    try {
      const editorasResultado = await editoras.find();
      res.status(200).send(editorasResultado);
    } catch (err) {
      res.status(500).send({ message: err.message });
    }
  };

  static listarEditoraPorId = async (req, res) => {
    const { id } = req.params;
    try {
      const editoraResultado = await editoras.findById(id);
      res.status(200).send(editoraResultado);
    } catch (err) {
      res.status(400).send({ message: `${err.message} - Editora não encontrada` });
    }
  };

  static cadastrarEditora = async (req, res) => {
    const editora = new editoras(req.body);
    try {
      await editora.save();
      res.status(201).send({ message: `Editora ${editora.nome} cadastrada` });
    } catch (err) {
      res.status(500).send({ message: `${err.message} - Erro no cadastro da editora` });
    }
  };

  static atualizarEditora = async (req, res) => {
    const { id } = req.params;
    const novaInfo = req.body;
    try {
      await editoras.findByIdAndUpdate(id, { $set: novaInfo });
      res.status(200).send({ message: 'Editora atualizada com sucesso' });
    } catch (err) {
      res.status(500).send({ message: `${err.message} - Erro ao atualizar editora` });
    }
  };

  static excluirEditora = async (req, res) => {
    const { id } = req.params;
    try {
      const editora = await editoras.findByIdAndDelete(id);
      res.status(200).send({ message: `Editora ${editora.nome} excluída com sucesso` });
    } catch (err) {
      res.status(500).send({ message: err.message });
    }
  };
}

export default EditoraController;