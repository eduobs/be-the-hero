const express = require('express');
const OngController = require('./Controllers/OngControlle');
const IncidentsController = require('./Controllers/IncidentsController');
const ProfileController = require('./Controllers/ProfileController');
const SessionController = require('./Controllers/SessionController');

const route = express.Router();

route.post('/sessions', SessionController.create);

route.get('/ongs', OngController.index);
route.post('/ongs', OngController.create);

route.get('/profile', ProfileController.index);

route.get('/incidents', IncidentsController.index);
route.post('/incidents', IncidentsController.create);
route.delete('/incidents/:id', IncidentsController.delete);

module.exports = route;