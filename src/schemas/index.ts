import Joi from 'joi';

const mensageSchema = {
  name: {
    'any.required': 'Por vafor, informe o nome',
    'string.base': 'nome deve ser uma string',
  },
  email: {
    'any.required': 'Por vafor, informe o email',
    'string.base': 'email deve ser uma string',
    'string.email': 'email deve ser um email válido',
  },
  cpf: {
    'any.required': 'Por vafor, informe o cpf',
    'string.base': 'cpf deve ser uma string',
    'string.length': 'cpf deve ter 11 caracteres',
  },
  phone: {
    'any.required': 'Por vafor, informe o telefone',
    'string.base': 'telefone deve ser uma string',
    'string.length': 'telefone deve ter 12 caracteres',
  },
  initialDate: {
    'any.required': 'Por vafor, informe a data inicial',
    'string.base': 'data inicial deve ser uma string',
    'string.pattern.base': 'data inicial deve estar no formato yyyy-mm-dd',
  },
  finalDate: {
    'any.required': 'Por vafor, informe a data final',
    'string.base': 'data final deve ser uma string',
    'string.pattern.base': 'data final deve estar no formato yyyy-mm-dd',
  },
};

const registerSchema = Joi.object({
  name: Joi.string().required().messages(mensageSchema.name),
  email: Joi.string().email().required().messages(mensageSchema.email),
  cpf: Joi.string().length(11).required().messages(mensageSchema.cpf),
  phone: Joi.string().length(12).required().messages(mensageSchema.phone),
});

const reportSchema = Joi.object({
  initialDate: Joi.string().regex(/^\d{4}-\d{2}-\d{2}$/).required().messages(mensageSchema.initialDate),
  finalDate: Joi.string().regex(/^\d{4}-\d{2}-\d{2}$/).required().messages(mensageSchema.finalDate),
});

export { registerSchema, reportSchema };
