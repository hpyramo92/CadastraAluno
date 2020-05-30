const connection = require('../database/connection');

module.exports = {
    async index (request, response) {
        const { page = 1 } = request.query;

        const [count] = await connection('usuarios').count();

        const ongs = await connection('usuarios')
            .limit(50)
            .offset((page - 1) * 50)
            .select('*');

        response.header('X-Total-Count', count['count(*)'])
        
        return response.json(ongs);
    },

    async create(request, response) {
        const { nome, email, whatsapp } = request.body;

        const [id] = await connection('usuario').insert({
            nome,
            email,
            whatsapp
        });

        return response.json({ id });
    },

    async delete(request, response) {
        const { id } = request.params;
        const usuarioId = request.headers.authorization;

        const usuario = await connection('usuario')
            .where('id', id)
            .select('nome')
            .first();

        await connection('usuario').where('id', id).delete();

        return response.status(204).send();
    }
}