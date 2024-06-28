import Joi from 'joi';

// Definindo o schema Joi para validação
const usuarioValidacao = Joi.object({
    nome_completo: Joi.string().required(),
    nome_usuario: Joi.string().required(),
    genero: Joi.string().required(),
    email: Joi.string().email().required(),
    senha: Joi.string().min(5).required(),
    data_nascimento: Joi.date().iso().required(),
    cep: Joi.number().required(),
    cidade: Joi.string().required(),
    logradouro: Joi.string().required(),
    numero: Joi.number().required(),
    complemento: Joi.string().optional()
})

export default usuarioValidacao