const { Router } = require('express');
const multer = require('multer');
const multerConfig = require('./config/multer');

const routes = Router();

routes.get('/', (req, res) => res.json({ msg: 'Hello Curitiba!' }));
routes.post('/posts', multer(multerConfig).single('file'), (req, res) =>
  res.json({ msg: 'Hello Curitiba!' })
);

module.exports = routes;
