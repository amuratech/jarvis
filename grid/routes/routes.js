import express from 'express';

const bodyParser = require('body-parser');

const routes = express.Router();
const apiController = require('./../controller/api');

routes.get('/v1/', apiController.inComing);
routes.get('/getter', bodyParser.json(), apiController.getRequest);

module.exports = routes;
