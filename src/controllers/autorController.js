import autores from "../models/Autor.js";

class AutorController {

    static listarAutores = (req, res) => {
        autores.find((err, autores) => {
            if (!err) {
                res.status(200).send(autores)
            } else {
                res.status(500).send({message: err.message});
            }
        });
    }

    static listarAutorPorID = (req, res) => {
        const {id} = req.params;
        autores.findById(id, (err, autor) => {
            if (!err) {
                res.status(200).send(autor);
            } else {
                res.status(400).send({message: `${err.message} - Autor id:${autor.id} não encontrado`});            }
        });
    }

    static cadastrarAutor = (req, res) => {
        let autor = new autores(req.body);
        autor.save((err) => {
            if (!err) {
                res.status(201).send({message: `Autor "${req.body.nome}" criado com sucesso.`});
            } else {
                res.status(500).send({message: `${err.message} - Erro ao tentar cadastrar o autor.`});
            }
        });
    }

    static atualizarAutor = (req, res) => {
        const {id} = req.params;
        autores.findByIdAndUpdate(id, {$set: req.body}, (err) => {
            if (!err) {
                res.status(200).send({message: "Autor(a) atualizado com sucesso."})
            } else {
                res.status(500).send({message: `${err.message} - Erro ao atualizar o autor.`});
            }
        });
    }

    static excluirAutor = (req, res) => {
        const {id} = req.params;
        autores.findByIdAndDelete(id, (err) => {
            if (!err) {
                res.status(200).send({message: `Autor id:${id} excluído.`});
            } else {
                res.status(500).send({message: err.message});
            }
        });
    }
    
}

export default AutorController;
