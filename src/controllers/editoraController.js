import editoras from '../models/Editora.js';

class EditoraController {
    
  static listarEditoras = (req, res) => {
    editoras.find((err, editoras) => {
      if (!err){
        res.status(200).send(editoras);
      } else {
        res.status(500).send({message: err.message});
      }
    });
  };

  static listarEditoraPorId = (req, res) => {
    const {id} = req.params;
    editoras.findById(id, (err, editora) => {
      if (!err) {
        res.status(200).send(editora);
      } else {
        res.status(400).send({message: `${err.message} - Editora não encontrada`});
      }
    });
  };

  static cadastrarEditora = (req, res) => {
    let editora = new editoras(req.body);
    editora.save((err) => {
      if(!err) {
        res.status(201).send({message: `Editora "${editora.nome}" cadastrada`});
      } else {
        res.status(500).send({message: `${err.message} - Erro no cadastro da editora`});
      }
    });
  };

  static atualizarEditora = (req, res) => {
    const {id} = req.params;
    editoras.findByIdAndUpdate(id, {$set: req.body}, (err) => {
      if (!err) {
        res.status(200).send({message: 'Editora atualizada com sucesso'});
      } else {
        res.status(500).send({message: `${err.message} - Erro ao atualizar editora`});
      }
    });
  };

  static excluirEditora = (req, res) => {
    const {id} = req.params;
    editoras.findByIdAndDelete(id, (err, editora) => {
      if (!err) {
        res.status(200).send({message: `Editora "${editora.nome}" excluída com sucesso`});
      } else {
        res.status(500).send({message: err.message});
      }
    });
  };
}

export default EditoraController;