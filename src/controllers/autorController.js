import autores from '../models/Autor.js';

class AutorController {

  static listarAutores = async (req, res) => {
    try {
      const autoresResultado = await autores.find();
      res.status(200).send(autoresResultado);
    } catch (err) {
      res.status(500).send({ message: err.message });
    }
  };

  static listarAutorPorID = async (req, res) => {
    const { id } = req.params;

    try {
      const autorResultado = await autores.findById(id);
      res.status(200).send(autorResultado);
    } catch (err) {
      res.status(400).send({ message: `${err.message} - Autor id:${id} não encontrado` });
    }
  };

  static cadastrarAutor = async (req, res) => {
    const autor = new autores(req.body);
    try {
      const novoAutor = await autor.save();
      res.status(201).send({ message: `Autor ${novoAutor.nome} criado com sucesso.` });
    } catch (err) {
      res.status(500).send({ message: `${err.message} - Erro ao tentar cadastrar o autor.` });
    }
  };

  static atualizarAutor = async (req, res) => {
    const { id } = req.params;
    const novaInfo = req.body;
    try {
      await autores.findByIdAndUpdate(id, { $set: novaInfo });
      res.status(200).send({ message: 'Autor(a) atualizado com sucesso.' });
    } catch (err) {
      res.status(500).send({ message: `${err.message} - Erro ao atualizar o autor.` });
    }
  };

  static excluirAutor = async (req, res) => {
    const { id } = req.params;
    try {
      await autores.findByIdAndDelete(id);
      res.status(200).send({ message: `Autor id:${id} excluído.` });
    } catch (err) {
      res.status(500).send({ message: err.message });
    }
  };
}

export default AutorController;
