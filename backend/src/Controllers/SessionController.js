const connection = require('../database/connection');

module.exports = {
    async create(request, response){
        const { id } = request.body;
        
        const result = await connection('ongs')
                        .where('id', id)
                        .select('nome')
                        .first();
                        
        if(!result){
            return response.status('400').json({ error: 'Não foi possível localizar a ONG'});
        }

        return response.json(result);
    }
};