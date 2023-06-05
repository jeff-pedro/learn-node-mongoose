import mongoose from 'mongoose';

// Adiciona uma validação customizada para toda string
mongoose.Schema.Types.String.set('validate', {
  validator: (valor) => valor !== '',
  message: ({ path }) => `O campo ${path} foi fornecido em branco.`
});
