import mongoose from 'mongoose';

const {Schema} = mongoose;

const editoraSchema = new Schema(
  {
    id: {type: String},
    nome: {type: String, required: true}
  },
  {
    versionKey: false
  }
);

const editoras = mongoose.model('editoras', editoraSchema);

export default editoras;
