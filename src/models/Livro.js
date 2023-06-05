import mongoose from 'mongoose';
const { Schema } = mongoose;

const livroSchema = new Schema({
  id: { type: String },
  titulo: {
    type: String,
    required: [true, 'O título do livro é obrigatório']
  },
  autor: {
    type: Schema.Types.ObjectId,
    ref: 'autores',
    required: [true, 'O(a) autor(a) é obrigatório']
  },
  editora: {
    type: Schema.Types.ObjectId,
    ref: 'editoras',
    required: [true, 'A editora é obrigatória']
  },
  num_paginas: {
    type: Number,
    validate: {
      validator: (valor) => {
        return valor >= 10 && valor <= 5000;
      },
      message: 'O número de páginas deve estar entre 10 e 5000. Valor fornecido: {VALUE}'
    }
  }
});

const livros = mongoose.model('livros', livroSchema);

export default livros;
