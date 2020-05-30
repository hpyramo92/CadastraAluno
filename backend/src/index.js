const express = require('express');
const cors = require('cors');
const routes = require('./routes');

const app = express();

app.use(cors());
app.use(express.json());
app.use(routes);

app.listen(3333);
/**
 * Métodos HTTP:
 * 
 * GET: Buscar/listar uma informação do back-end
 * POST: Criar uma informação no back-end
 * PUT: Alterar uma informação no back-end
 * DELETE: Deletar uma informação no back-end
 */

 /**
  * Tipos de parâmetros:
  * 
  * Query params: Parâmetros nomeados enviados na rota após "?" (filtros, paginação) localhost:3333/users?name=Henrique
  * Route params: Parâmetros utilizados para identificar recursos localhost:3333/users:id
  * Request Body: Corpo da requisição, utilizado para criar ou alterar recursos
  */

  /**
   * Driver: SELECT * FROM users
   * Query Builder: table('users').select('*').where()
   */

