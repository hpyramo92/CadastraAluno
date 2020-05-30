const connection = require('../database/connection');

module.exports = {
    async create (request, response) {
        const { login, senha } = request.body;

        const usuario = await connection
            .where('login', login)
            .first();
        
        if(!usuario || usuario.senha !== senha) {
            return response.status(400).json({
                error: 'Usuário não encontrado ou senha incorreta'
            });
        }

        return response.json(usuario);
    }
}