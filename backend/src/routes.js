const express = require('express');
const routes = express.Router();

const UsuarioController = require('./controllers/UsuarioController');
const SessionController = require('./controllers/SessionController');

routes.get('/usuarios', UsuarioController.index);
routes.post('/usuarios', UsuarioController.create);
routes.delete('/usuarios/:id', UsuarioController.delete);

routes.post('/sessions', SessionController.create);

module.exports = routes;