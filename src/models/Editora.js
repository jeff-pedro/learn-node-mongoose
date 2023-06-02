import mongoose from 'mongoose';

const { Schema } = mongoose;

const editoraSchema = new Schema(
  {
    id: { type: String },
    nome: {
      type: String,
      required: [true, 'O nome da editora é obrigatório'],
      enum: {
        values: ['Casa do Código', 'Alura'],
        message: 'A editora {VALUE} não é um valor permitido'
      }
    }
  },
  {
    versionKey: false
  }
);

const editoras = mongoose.model('editoras', editoraSchema);

export default editoras;
